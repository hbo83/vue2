<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <Header />
    <Nav />

    <div class="odecty">


        <table>
      <tr>
        <th colspan="2">Byt</th>
        <th colspan="3">Voda</th>
        <th colspan="3">Elektřina</th>
        <th colspan="3">Plyn</th>
      </tr>
      <tr>
        <th>č.</th>
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
<tr v-for="odecet in odecty">
<td>{{ odecet.name }}</td>
<td>{{ odecet.name }}</td>
<td>{{ odecet.value }}</td>
<td>{{ odecet.waterValue }}</td>
<td>{{ odecet.date }}</td>
<td>{{ odecet.electricityValue }}</td>
<td>{{ odecet.commodity }}</td>
<td>{{ odecet.gasValue }}</td>
<td>{{ odecet.value }}</td>
<td>{{ odecet.commodity }}</td>
<td>{{ odecet.date }}</td>
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
  data () {
    return {
      odecty: ''
    }
  },
  components: {
    Header,
    Nav
  },
  mounted() {
      axios.get('http://localhost:8081/odecty')
      .then((response) => {
        console.log(response.data);
        this.odecty = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
},
updated: function () {
  this.$nextTick(function () {
    console.log("updated");
  })
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.odecty {
  width: 80%;
  height: 500px;
  border: 1px solid black;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}

.odecty table {
  width: 100%;
}
.odecty td, .odecty th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.odecty tr:nth-child(even){background-color: #f2f2f2;}

.odecty tr:hover {background-color: #ddd;}

.odecty th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
