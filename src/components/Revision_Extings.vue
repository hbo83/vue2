<template>
<div>
  <Header />
  <Nav />
<v-btn style="float: left; margin-left: 60px" fab width="80px" small color="info" to="/revision">
  <v-icon large>arrow_back</v-icon>
</v-btn>
  <div class="exciting">
  <p style="text-align: justify"><b>Jako každé jiné elektrické zařízení je potřeba i na hromosvodech provádět dle příslušných norem pravidelné
     revize a kontroly. Zařízení slouží k ochraně budov, objektů a živých bytostí v nich před nebezpečnými účinky blesku. Hromosvod vytváří
      umělou vodivou cestu k přijetí a svedení bleskového výboje do země. Proto z hlediska bezpečnosti lidského zdraví a majetkových škod je
       nezbytné toto zařízení udržovat a dodržovat termíny kontrol a revizí.</b></p>
  <v-app class="white">

        <v-menu
          v-model="menu"
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
              label="Datum poslední revize vizuální kontroly"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
        </v-menu>

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
              v-model="date2"
              label="Datum poslední pravidelné revize"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date2" @input="menu2 = false"></v-date-picker>
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



export default {
  name: 'Revision_Excitings',
  data() {
    return {
      userGlobal: '',
      date: new Date().toISOString().substr(0, 10),
      date2: new Date().toISOString().substr(0, 10),
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

      axios.put('http://localhost:8081/revision/Extings', {
        // id: '5d3d4967f21d7167583bf923',
        userGlobal: this.userGlobal,
        revTitle: 'Extings',
        revLast1: this.date,
        revLast2: this.date2
      }).then(this.$router.push({
        name: 'Revision'
      })).then(alert("revize update" + this.date))
    }
  },
  mounted() {
    console.log('Revision_Excitings.vue mounted');
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
.exciting {
  width: 54%;
  margin-left: 26%;
  height: 100px;
}

</style>
