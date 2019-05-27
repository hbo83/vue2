<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <Header />
    <Nav />

    <div class="schuze">
      <table>
    <tr>
      <th>Téma schůze</th>
      <th>Vytvořeno</th>
      <th>Uskutečnění</th>
    </tr>
    <tr>
      <td>Nátěr střechy</td>
      <td>29.06.2019</td>
      <td>30.08.2019</td>
    </tr>

  </table>
    </div>
  </div>

</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'

export default {
  name: 'Schuze',
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

.schuze {
  width: 80%;
  height: 500px;
  border: 1px solid black;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}

.schuze table {
  width: 100%;
}
.schuze td, .schuze th {
  border: 1px solid #ddd;
  padding: 8px;
}

.schuze tr:nth-child(even){background-color: #f2f2f2;}

.schuze tr:hover {background-color: #ddd;}

.schuze th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
