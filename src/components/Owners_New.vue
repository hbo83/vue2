<template>
<div>
  <Header />
  <Nav />
<v-btn style="float: left; margin-left: 60px" fab width="80px" small color="info" to="/owners">
  <v-icon large>arrow_back</v-icon>
</v-btn>
  <div class="newOwner">
    <v-app class="white">
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="flatNumber" :counter="2" label="Číslo bytu" required></v-text-field>

        <v-text-field v-model="name" :counter="30" label="Jméno" required></v-text-field>

        <v-text-field v-model="address" :counter="30" :rules="nameRules" label="Adresa" required></v-text-field>

        <v-text-field v-model="part" :counter="13" label="Podíl" required></v-text-field>

        <v-text-field v-model="phone" label="Telefon" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>


        <v-btn @click="formSubmit" color="success">
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
  name: 'Owners_New',
  data() {
    return {
      userGlobal: '',
      flatNumber: '',
      name: '',
      address: '',
      part: '',
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
    someMethod() {
      console.log(this.$parent);
      this.$parent.someMethod;
    },
    formSubmit(e) {
      e.preventDefault();
      this.isOpen = false;
      let currentObj = this;
      axios.post('http://localhost:8081/owner', {
        userGlobal: this.userGlobal,
        flatNumber: this.flatNumber,
        name: this.name,
        address: this.address,
        part: this.part,
        phone: this.phone,
        email: this.email
      }).then(this.$router.push({
        name: 'Owners'
      })).then(alert("kontakt uložen"))
    }
  },
  mounted() {
    console.log("Owners_New mounted");
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
.newOwner {
  width: 29%;
  margin-left: 38%;

}

</style>
