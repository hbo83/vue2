<template>
<div>
  <Header />
  <Nav />
<v-btn style="float: left; margin-left: 60px" fab width="80px" small color="info" to="/meeting">
  <v-icon large>arrow_back</v-icon>
</v-btn>
  <div class="newMeeting">
    <v-app class="white">
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="theme" :counter="30" label="Téma" required></v-text-field>

        <v-menu v-model="menu1" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y full-width min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field v-model="created" label="Vytvořeno" prepend-icon="event" readonly v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="created" @input="menu1 = false"></v-date-picker>
        </v-menu>

        <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y full-width min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field v-model="date" label="Datum konání schůze" prepend-icon="event" readonly v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>

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
  name: 'Meeting_New',
  data() {
    return {
      theme: '',
      created: new Date().toISOString().substr(0, 10),
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
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
      axios.post('http://localhost:8081/meeting', {
        theme: this.theme,
        created: this.created,
        date: this.date,
      }).then(this.$router.push({
        name: 'Meeting'
      })).then(alert("Meeting uložen"))
    }
  },
  mounted() {
    console.log('Meeting_New mounted')
  },
  components: {
    Header,
    Nav
  }
}
</script>
<style scoped>
.newMeeting {
  width: 29%;
  margin-left: 38%;

}
</style>
