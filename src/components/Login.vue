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

    logIn() {
      let currentObj = this;


      var request = {
        params: {
          login: [this.email, this.password]
        }
      }
      axios.get('http://localhost:8081/users/', request).then((response) => {
          console.log(response.data);
          alert("Nyní jste přihlášen jako" + " " + response.data[0].email);
          localStorage.setItem("userLoged", response.data[0].email);
        }).then(this.$router.push({
          name: 'Contacts',
          params: { userLoged: this.email }
        }))
        .catch((error) => {
          console.log(error);
          alert("Heslo nebo email nesouhlasí")
        })

    },
    signIn() {
      let currentObj = this;
      axios.post('http://localhost:8081/users', {

        email: this.email,
        password: this.password
      }).then(this.$router.push({
        name: 'Contacts'
      })).then(alert("kontakt uložen, nyní se můžete přihlásit"))
    }
  },
  mounted() {
    console.log("Login.vue mounted")
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
