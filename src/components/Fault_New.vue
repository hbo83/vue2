<template>
<div>
  <Header />
  <Nav />
<v-btn style="float: left; margin-left: 60px" fab width="80px" small color="info" to="/fault">
  <v-icon large>arrow_back</v-icon>
</v-btn>
  <div class="newFault">
    <v-app class="white">
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="fault" :counter="30" label="Závada" required></v-text-field>

        <v-text-field v-model="partOfHouse" :counter="30" :rules="nameRules" label="Část domu" required></v-text-field>

        <v-text-field v-model="hurry" :counter="13" label="Spěchá" required></v-text-field>



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
  name: 'Fault_New',
  data() {
    return {
      fault: '',
      partOfHouse: '',
      hurry: true,

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
      axios.post('http://localhost:8081/fault', {
        fault: this.fault,
        partOfHouse: this.partOfHouse,
        hurry: this.hurry

      }).then(this.$router.push({
        name: 'Fault'
      })).then(alert("Závada uložena"))
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
.newFault {
  width: 29%;
  margin-left: 38%;

}
</style>
