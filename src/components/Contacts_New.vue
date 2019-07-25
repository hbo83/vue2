<template>
  <div>
  <Header />
  <Nav />

  <div class="newContact">
    <v-app class="white">
    <v-form
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="profession"
      :counter="30"

      label="Profese"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="30"
      :rules="nameRules"
      label="Jméno"
      required
    ></v-text-field>

    <v-text-field
      v-model="phone"
      :counter="13"
      label="Telefon"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

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

    <v-btn
      @click="formSubmit"
      color="success"
    >
      Uložit
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
  name: 'Contacts_New',
  data () {
    return {
      profession: '',
      name: '',
      phone: '',
      email: '',
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
    someMethod(){
      console.log(this.$parent);
      this.$parent.someMethod;
    },
    formSubmit(e) {
        e.preventDefault();
        this.isOpen = false;
        let currentObj = this;
        axios.post('http://localhost:8081/contact', {
          profession: this.profession,
              name: this.name,
              phone: this.phone,
              email: this.email
        }).then(this.$router.push({ name: 'Contacts'})).then(alert("kontakt uložen"))
    },
    addContact() {
      this.$emit('addContact', {
            profession: this.profession,
            name: this.name,
            phone: this.phone,
            email: this.email
      });
    }
  },
  mounted() {
    console.log(789)
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

}
/* .application--wrap {
  background: black!important;
} */

</style>
