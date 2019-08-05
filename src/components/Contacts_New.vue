<template>
<div>
  <Header />
  <Nav />
<v-btn style="float: left; margin-left: 60px" fab width="80px" small color="info" to="/contacts">
  <v-icon large>arrow_back</v-icon>
</v-btn>
  <div class="newContact">
    <v-app class="white">
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="profession" :counter="30" label="Profese" required></v-text-field>

        <v-text-field v-model="name" :counter="30" :rules="nameRules" label="Jméno" required></v-text-field>

        <v-text-field v-model="phone" :counter="13" label="Telefon" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-btn @click="saveContact" color="success">
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
  data() {
    return {
      userGlobal: '',
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
    saveContact(e) {

      axios.post('http://localhost:8081/contact', {
        userGlobal: this.userGlobal,
        profession: this.profession,
        name: this.name,
        phone: this.phone,
        email: this.email
      }).then(this.$router.push({
        name: 'Contacts'
      })).then(alert("Kontakt uložen"))
    }
  },
  mounted() {
    console.log("Contact_New mounted");
    this.userGlobal = localStorage.getItem("userLoged");
    console.log(this.userGlobal);
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
</style>
