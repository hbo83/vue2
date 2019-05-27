<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <Header />
    <Nav />

    <div class="zavady">


        <table>
      <tr>
        <th>zavady</th>
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
  name: 'Zavady',
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
