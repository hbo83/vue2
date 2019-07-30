<template>
<div>
  <Header />
  <Nav />

  <div class="newContact">

    <!-- <v-flex xs6> -->
        <!-- <v-subheader>Vlastník</v-subheader> -->
      <!-- </v-flex> -->
      <v-flex xs6>
        <v-select
          v-model="name"
          :items="owners"
          menu-props="auto"
          label="Vlastník"
          hide-details
          prepend-icon="face"
          single-line
        ></v-select>
      </v-flex>
    <v-app class="white">
      <v-form ref="form" lazy-validation>
        <!-- <v-subheader>Voda</v-subheader> -->
        <v-text-field prepend-icon="waves" v-model="waterValue" :rules="nameRules" label="Hodnota vodoměru" required></v-text-field>
<!-- <v-subheader>Elektřina</v-subheader> -->
        <v-text-field prepend-icon="battery_alert"v-model="electricityValue" label="Hodnota elektroměru"></v-text-field>
<!-- <v-subheader>Plyn</v-subheader> -->
        <v-text-field prepend-icon="local_gas_station" v-model="gasValue" label="Hodnota plynoměru"></v-text-field>

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
      e1: 'Florida',
        e2: 'Texas',
        e3: null,
        e4: null,

        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' },
        ],
        owners: [],
      name: '',
      waterValue: '',
      electricityValue: '',
      gasValue: '',
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
        name: this.name,
        waterValue: this.waterValue,
        electricityValue: this.electricityValue,
        gasValue: this.gasValue
      }).then(this.$router.push({
        name: 'Odecty'
      })).then(alert("kontakt uložen"))
    }
  },
  mounted() {
    console.log('Odecty_New mounted');

      var config = {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        }
      };

    axios.get('http://localhost:8081/owners', config)
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
