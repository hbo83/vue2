<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <Header />
    <Nav />

    <div class="zavady">


        <table>
      <tr>
        <th>Závada</th>
        <th>Jednotka</th>
        <th>Podíl</th>
      </tr>
<tr v-for="imperfection in imperfections">
  <td>{{ imperfection.imperfection }}</td>
  <td>{{ imperfection.created }}</td>
  <td>{{ imperfection.hurry }}</td>
</tr>
    </table>
<ModalImperfection />
    </div>
  </div>

</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
import ModalImperfection from './ModalImperfection';
import axios from 'axios';

export default {
  name: 'Zavady',
  data () {
    return {
      imperfections: []
    }
  },
  components: {
    Header,
    Nav,
    ModalImperfection
  },
  mounted() {
      axios.get('http://localhost:8081/imperfections')
      .then((response) => {
        console.log(response.data);
        this.imperfections = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.zavady {
  width: 80%;
  height: 500px;
  border: 1px solid black;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}

.zavady table {
  width: 100%;
}
.zavady td, .zavady th {
  border: 1px solid #ddd;
  padding: 8px;
}

.zavady tr:nth-child(even){background-color: #f2f2f2;}

.zavady tr:hover {background-color: #ddd;}

.zavady th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
