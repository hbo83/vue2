<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <Header />
    <Nav />

    <div class="nastaveni">


        <table>
      <tr>
        <th>Nastaveni</th>
        <th>Jednotka</th>
        <th>Podíl</th>
      </tr>

    </table>

    </div>
  </div>

</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'

export default {
  name: 'Nastaveni',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header,
    Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nastaveni {
  width: 80%;
  height: 500px;
  border: 1px solid black;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}

.nastaveni table {
  width: 100%;
}
.nastaveni td, .nastaveni th {
  border: 1px solid #ddd;
  padding: 8px;
}

.nastaveni tr:nth-child(even){background-color: #f2f2f2;}

.nastaveni tr:hover {background-color: #ddd;}

.nastaveni th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
