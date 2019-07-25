<template>
<div>
  <Header />
  <Nav />

  <div class="editContact">
    <v-app>
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="profession" :counter="10" label="Profese" required></v-text-field>

        <v-text-field v-model="name" label="Jméno" required></v-text-field>

        <v-text-field v-model="phone" label="Telefon" required></v-text-field>

        <v-text-field v-model="email" label="E-mail" required></v-text-field>

        <!-- <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox> -->

        <v-btn @click="formSubmit" color="success">
          Uložit změnu
        </v-btn>

        <v-btn @click="delContact(id)" color="error">
          Smazat kontakt {{ this.id }}
        </v-btn>


      </v-form>
    </v-app>
  </div>
</div>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
import vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'

export default {
  name: 'EditContact',
  data() {
    return {
      profession: '',
      name: '',
      phone: '',
      email: '',
      id: ''
    }
  },
  methods: {
    someMethod(e) {
      console.log(e);
      this.$parent.someMethod;
    },
    formSubmit(e) {
      e.preventDefault();
      this.isOpen = false;
      let currentObj = this;

      axios.put('http://localhost:8081/contact/' + this.id, {
        id: this.id,
        profession: this.profession,
        name: this.name,
        phone: this.phone,
        email: this.email
      }).then(alert("kontakt změněn" + this.id + this.profession))
    },
    delContact(id) {
      if (confirm('Určitě chcete smazat kontakt?')) {

        console.log("mazu")
        axios.delete('http://localhost:8081/contact/' + id)
          .then((response) => {
            console.log(response.data);
            // this.contacts = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
      alert("Kontakt byl smazán")
      this.$router.push({
        name: 'Contacts'
      })
    }
  },
  mounted() {
    //zde jsou namountována data z parametru předaného v komponentě contacts redirektem
    console.log(this.$route.params)
    this.profession = this.$route.params.profession
    this.name = this.$route.params.name
    this.phone = this.$route.params.phone
    this.email = this.$route.params.email
    this.id = this.$route.params._id
    console.log(this.id)
  },
  components: {
    Header,
    Nav
  }
}
</script>
<style scoped>
.newContact {
  width: 29%;
  margin-left: 38%;
  background: none;
}

/* .application--wrap {
  background: black!important;
} */
</style>
