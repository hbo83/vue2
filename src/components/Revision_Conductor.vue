<template>
<div>
  <Header />
  <Nav />

  <div class="conductor">
  <p style="text-align: justify"><b>Účelem revize elektrických zařízení je ověřování jejich stavu z hlediska bezpečnosti. Požadavky bezpečnosti se považují za splněné,
     pokud elektrické zařízení odpovída z hlediska bezpečnosti příslušným ustanovením norem.</b></p>
  <v-app class="white">

        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Datum poslední revize"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>

    <v-btn style="margin-bottom: 380px" @click="formSubmit" color="success">
      Uložit
    </v-btn>
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
import UploadButton from 'vuetify-upload-button';


export default {
  name: 'Revision_Conductor',
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),

      menu: false,
      modal: false,
      menu2: false,

    }
  },
  computed: {
    nextDate: function() {
      let numDate = parseInt(this.date.substr(0, 4)) + 5
      let numDay = this.date.substr(4, 9)
      return numDate + numDay
    }
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      this.isOpen = false;
      let currentObj = this;

      axios.put('http://localhost:8081/revision/Conductor', {
        // id: '5d3d4967f21d7167583bf923',
        revTitle: 'Conductor',
        revLast: this.date
      }).then(this.$router.push({
        name: 'Revision'
      })).then(alert("revize update" + this.date))
    }
  },
  mounted() {
    console.log('Revision_Conductor.vue mounted')
  },
  components: {
    Header,
    Nav
  }
}
</script>
<style scoped>
.conductor {
  width: 54%;
  margin-left: 26%;
  height: 100px;
}

</style>
