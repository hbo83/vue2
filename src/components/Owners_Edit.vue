<template>
<div>
  <Header />
  <Nav />

  <div class="editOwner">
    <v-app class="white">
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="name" :counter="30" label="Jméno" required></v-text-field>

        <v-text-field v-model="address" :counter="30" :rules="nameRules" label="Adresa" required></v-text-field>

        <v-text-field v-model="part" :counter="13" label="Podíl" required></v-text-field>

        <v-text-field v-model="phone" label="Telefon" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-btn @click="formSubmit" color="success">
          Uložit změnu
        </v-btn>

        <v-btn @click="delContact(id)" color="error">
          Smazat kontakt
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
  name: 'EditOwner',
  data() {
    return {
      name: '',
      address: '',
      part: '',
      phone: '',
      email: '',
      id: '',
      nameRules: [
        v => !!v || 'Jméno je vyžadováno',
        v => v.length <= 30 || 'Jméno musí mít méně než 30 znaků'
      ],
      email: '',
      emailRules: [
        // v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail je zadán nesprávně'
      ]
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

      axios.put('http://localhost:8081/owner/' + this.id, {
        id: this.id,
        name: this.name,
        address: this.address,
        part: this.part,
        phone: this.phone,
        email: this.email
      }).then(this.$router.push({
        name: 'Owners'
      })).then(alert("kontakt změněn"))
    },
    delContact(id) {
      if (confirm('Určitě chcete smazat kontakt?')) {

        console.log("mazu")
        axios.delete('http://localhost:8081/owner/' + id)
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
        name: 'Owners'
      })
    }
  },
  mounted() {
    //zde jsou namountována data z parametru předaného v komponentě contacts redirektem
    console.log(this.$route.params)
    this.name = this.$route.params.name
    this.address = this.$route.params.address
    this.part = this.$route.params.part
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
.editOwner {
  width: 29%;
  margin-left: 38%;

}

</style>
