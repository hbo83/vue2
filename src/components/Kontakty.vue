<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <Header />
    <Nav />

    <div class="kontakty">


        <table>
      <tr>
        <th>Kategorie</th>
        <th>Jméno</th>
        <th>Kontakt</th>
      </tr>
      <tr>
        <td>Software</td>
        <td>Martin Habal</td>
        <td>777 187 327</td>
      </tr>
      <tr>
        <td>Revize</td>
        <td>Antonín Knodel</td>
        <td>603 458 966</td>
      </tr>
      <tr>
        <td>Zedník</td>
        <td>Antonín Hruška</td>
        <td>602 896 554</td>
      </tr>

    </table>

    </div>
  </div>

</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'

export default {
  name: 'Kontakty',
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

.kontakty {
  width: 80%;
  height: 500px;
  border: 1px solid black;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}

.kontakty table {
  width: 100%;
}
.kontakty td, .kontakty th {
  border: 1px solid #ddd;
  padding: 8px;
}

.kontakty tr:nth-child(even){background-color: #f2f2f2;}

.kontakty tr:hover {background-color: #ddd;}

.kontakty th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
