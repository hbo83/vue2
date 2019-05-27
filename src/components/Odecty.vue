<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <Header />
    <Nav />

    <div class="odecty">


        <table>
      <tr>
        <th>odecty</th>
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
  name: 'Odecty',
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
