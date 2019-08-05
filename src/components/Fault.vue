<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <Header />
    <Nav />

    <div class="zavady">


        <table>
      <tr>
        <th>Závada</th>
        <th>Část domu</th>
        <th>Spěchá</th>
      </tr>
<tr @click="selectRow(fault)" v-for="fault in faults">
  <td>{{ fault.fault }}</td>
  <td>{{ fault.partOfHouse }}</td>
  <td>{{ fault.hurry }}</td>
</tr>
    </table>

    </div>
    <v-btn fab width="80px" small color="info" to="/fault/Fault_New">
      <v-icon large>add</v-icon>
    </v-btn>
  </div>

</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'

import axios from 'axios';

export default {
  name: 'Zavady',
  data () {
    return {
      faults: []
    }
  },
  components: {
    Header,
    Nav

  },
  methods: {
    selectRow(fault) {
      console.log(event.target.parentNode.parentNode.childNodes)
      // console.log(id)
      //po kliknutí na řádek s kontaktem, redirekt na EditContact s předáním parametrů kliknutého kontaktu. V komponentě EditContact jsou předaná data namountována do formuláře.
      this.$router.push({
        name: 'Fault_Edit',
        params: fault
      })}
  },
  mounted() {
    console.log("Meeting mounted");
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

      axios.get('http://localhost:8081/fault', request)
      .then((response) => {
        console.log(response.data);
        this.faults = response.data;
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

  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  margin-left: 30px;
}

.zavady table {
  width: 100%;
  border-collapse: collapse;
}
.zavady td, .zavady th {
  border-bottom: 1px solid #ddd;
  padding: 8px;
  cursor: pointer;
  text-align: left;
}

.zavady tr:nth-child(even){background-color: #f2f2f2;}

.zavady tr:hover {background-color: #ddd;}

.zavady th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #64acce;
  color: white;
}
</style>
