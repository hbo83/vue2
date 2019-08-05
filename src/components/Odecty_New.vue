<template>
<div>
  <Header />
  <Nav />
<v-btn style="float: left; margin-left: 60px" fab width="80px" small color="info" to="/odecty">
  <v-icon large>arrow_back</v-icon>
</v-btn>
  <div class="newContact">

    <!-- <v-flex xs6> -->
    <!-- <v-subheader>Vlastník</v-subheader> -->
    <!-- </v-flex> -->
    <v-flex xs6>
      <v-select v-model="name" :items="owners" menu-props="auto" label="Vlastník" hide-details prepend-icon="face" single-line></v-select>
    </v-flex>
    <v-app class="white">
      <v-form ref="form" lazy-validation>
        <v-menu v-model="menu1" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y full-width min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field v-model="date1" label="Datum odečtu studené vody" prepend-icon="event" readonly v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="date1" @input="menu1 = false"></v-date-picker>
        </v-menu>
        <v-text-field prepend-icon="waves" v-model="waterColdValue" :rules="nameRules" label="Hodnota vodoměru studené vody" required></v-text-field>
        <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y full-width min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field v-model="date2" label="Datum odečtu teplé vody" prepend-icon="event" readonly v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="date2" @input="menu2 = false"></v-date-picker>
        </v-menu>
        </v-menu>
        <v-text-field prepend-icon="waves" v-model="waterHotValue" :rules="nameRules" label="Hodnota vodoměru teplé vody" required></v-text-field>
        <v-menu v-model="menu3" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y full-width min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field v-model="date3" label="Datum odečtu tepla" prepend-icon="event" readonly v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="date3" @input="menu3 = false"></v-date-picker>
        </v-menu>
        <v-text-field prepend-icon="reorder" v-model="heatingValue" label="Hodnota měřiče tepla"></v-text-field>

        <!-- <v-text-field prepend-icon="local_gas_station" v-model="gasValue" label="Hodnota plynoměru"></v-text-field> -->

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
  name: 'Contacts_New',
  data() {
    return {
      userGlobal: '',
      e1: 'Florida',
      e2: 'Texas',
      e3: null,
      e4: null,

      items: [{
          text: 'State 1'
        },
        {
          text: 'State 2'
        },
        {
          text: 'State 3'
        },
        {
          text: 'State 4'
        },
        {
          text: 'State 5'
        },
        {
          text: 'State 6'
        },
        {
          text: 'State 7'
        },
      ],
      menu1: false,
      menu2: false,
      menu3: false,
      date1: new Date().toISOString().substr(0, 10),
      date2: new Date().toISOString().substr(0, 10),
      date3: new Date().toISOString().substr(0, 10),
      owners: [],
      name: '',
      waterColdValue: '',
      waterHotValue: '',
      heatingValue: '',
      nameRules: [
        v => !!v || 'Stav vodoměru je vyžadován',
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
      axios.post('http://localhost:8081/odecty', {
        userGlobal: this.userGlobal,
        dateWaterCold: this.date1,
        dateWaterHot: this.date2,
        dateHeating: this.date3,
        name: this.name,
        waterColdValue: this.waterColdValue,
        waterHotValue: this.waterHotValue,
        heatingValue: this.heatingValue
      }).then(this.$router.push({
        name: 'Odecty'
      })).then(alert("kontakt uložen"))
    }
  },
  mounted() {
    console.log('Odecty_New mounted');
    this.userGlobal = localStorage.getItem("userLoged");
    console.log(this.userGlobal);

    var request = {
      params: {
        login: [this.userGlobal]
      },
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    }

    axios.get('http://localhost:8081/owners', request)
      .then((response) => {
        console.log(response.data);
        response.data.forEach((value, index) => {
          this.owners.push(value.name)
        })
        console.log(this.owners);
      })
      .catch((error) => {
        console.log(error);
      });

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
