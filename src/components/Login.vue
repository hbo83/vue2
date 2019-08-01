<template>
<div>
  <Header />


  <div class="login">
    <v-app class="white">
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field v-model="password" :counter="30" label="Heslo" required></v-text-field>


        <v-btn @click="logIn" color="success">
          Přihlásit se
        </v-btn>

        <v-btn @click="signIn" color="primary">
          Registrovat
        </v-btn>

      </v-form>
    </v-app>
  </div>
</div>
</template>

<script>
import Header from './Header.vue'

import vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
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
    someMethod() {
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
      }).then(this.$router.push({
        name: 'Contacts'
      })).then(alert("kontakt uložen"))
    },
    logIn() {
      let currentObj = this;

      axios.get('http://localhost:8081/users/' + this.email, {


      }).then((response) => {
        console.log(response.data);
        console.log(response.data[0].password);

        if (response.data[0].password === this.password) {
          alert("heslo souhlasí")
        } else {
          alert( "heslo nesouhlasí")
        }
      })
      .catch((error) => {
        console.log(error);
      })
      // .then(alert("nyní jste přihlášen jako" + " " + this.email))
    },
    signIn() {
      let currentObj = this;
      axios.post('http://localhost:8081/users', {

        email: this.email,
        password: this.password
      }).then(alert("kontakt uložen, nyní se můžete přihlásit"))
    }
  },
  mounted() {
    console.log(789)
  },
  components: {
    Header
  }
}
</script>
<style scoped>
.login {
  width: 29%;
  margin-left: 38%;

}
</style>
