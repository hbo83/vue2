<template>
<div>
  <!-- <h1>{{ msg }}</h1> -->
  <Header />
  <Nav />

  <div class="odecty">


    <table>
      <tr>
        <th colspan="1">Byt</th>
        <th colspan="3">Voda studená</th>
        <th colspan="3">Voda teplá</th>
        <th colspan="3">Teplo</th>

      </tr>
      <tr>
        <!-- <th>č.</th> -->
        <th>Jméno</th>
        <th>Poslední odečet datum</th>
        <th>Poslední odečet hodnota</th>
        <th>Datum příštího odečtu</th>
        <th>Poslední odečet datum</th>
        <th>Poslední odečet hodnota</th>
        <th>Datum příštího odečtu</th>
        <th>Poslední odečet datum</th>
        <th>Poslední odečet hodnota</th>
        <th>Datum příštího odečtu</th>

      </tr>
      <tr @click="selectRow(odecet)" v-for="odecet in odecty">
        <!-- <td>{{ odecet.flatNumber }}</td> -->
        <td>{{ odecet.name }}</td>
        <td>{{ odecet.dateWaterCold }}</td>
        <td>{{ odecet.dateWaterCold }}</td>
        <td>{{ nextDateWater(odecet.dateWaterCold) }}</td>
        <td>{{ odecet.dateWaterHot }}</td>
        <td>{{ odecet.dateWaterHot }}</td>
        <td>{{ nextDateWater(odecet.dateWaterHot) }}</td>
        <td>{{ odecet.dateHeating }}</td>
        <td>{{ odecet.heatingValue }}</td>
        <td>{{ nextDateHeating(odecet.dateHeating) }}</td>

      </tr>
    </table>

  </div>
  <v-btn fab width="80px" small color="info" to="/odecty/Odecty_New">
    <v-icon large>add</v-icon>
  </v-btn>
</div>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'

import axios from 'axios';
export default {
  name: 'Odecty',
  data() {
    return {
      odecty: ''

    }
  },
  components: {
    Header,
    Nav
  },
  mounted() {
    console.log("Odecty Mounted");
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
    axios.get('http://localhost:8081/odecty', request)
      .then((response) => {
        console.log(response.data);

        this.odecty = response.data;

      })
      .catch((error) => {
        console.log(error);
      });
  },
  updated: function() {
    this.$nextTick(function() {
      console.log("updated");
    })
  },
  methods: {
    nextDateWater: function(date) {
      let numDate = parseInt(date.substr(0, 4)) + 1
      let numDay = date.substr(4, 9)
      return numDate + numDay
    },
    nextDateHeating: function(date) {
      let numDate = parseInt(date.substr(0, 4)) + 1
      let numDay = date.substr(4, 9)
      return numDate + numDay
    },
    selectRow(odecet) {
      console.log(event.target.parentNode.parentNode.childNodes)
      // console.log(id)
      //po kliknutí na řádek s kontaktem, redirekt na EditContact s předáním parametrů kliknutého kontaktu. V komponentě EditContact jsou předaná data namountována do formuláře.
      this.$router.push({
        name: 'Odecty_Edit',
        params: odecet
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.odecty {
  width: 80%;
  height: 500px;
  margin-left: 30px;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  /* border-collapse: collapse; */
}

.odecty table {
  width: 100%;
  border-collapse: collapse;
}

.odecty td,
.odecty th {
  border-bottom: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  cursor: pointer;
}

/* .odecty tr:nth-child(even) {
  background-color: #f2f2f2;
} */

.odecty tr:hover {
  background-color: #fe9354f2;
}

.odecty th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #fe9354f2;
  color: white;
}
</style>
