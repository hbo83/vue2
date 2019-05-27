<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <Header />
    <Nav />

    <div class="spoluvlastnici">
      

        <table>
      <tr>
        <th>Vlastník</th>
        <th>Jednotka</th>
        <th>Podíl</th>
      </tr>
      <tr>
        <td>Martin Habal</td>
        <td>159/6</td>
        <td>6453/46869</td>
      </tr>
      <tr>
        <td>Marie Černá</td>
        <td>159/2</td>
        <td>6968/46869</td>
      </tr>
      <tr>
        <td>Monika Hánová</td>
        <td>159/1</td>
        <td>8626/46869</td>
      </tr>
      <tr>
        <td>Pavel Giňa</td>
        <td>159/5</td>
        <td>5158/46869</td>
      </tr>
      <tr>
        <td>Natalia Krugovaia</td>
        <td>159/7</td>
        <td>3020/46869</td>
      </tr>
      <tr>
        <td>Karla Markovcová</td>
        <td>159/4</td>
        <td>7358/46869</td>
      </tr>
      <tr>
        <td>SJM BohuslavSalaba a Růžena Salabová</td>
        <td>159/3</td>
        <td>9286/46869</td>
      </tr>
    </table>

    </div>
  </div>

</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'

export default {
  name: 'Spoluvlastnici',
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

.spoluvlastnici {
  width: 80%;
  height: 500px;
  border: 1px solid black;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}

.spoluvlastnici table {
  width: 100%;
}
.spoluvlastnici td, .spoluvlastnici th {
  border: 1px solid #ddd;
  padding: 8px;
}

.spoluvlastnici tr:nth-child(even){background-color: #f2f2f2;}

.spoluvlastnici tr:hover {background-color: #ddd;}

.spoluvlastnici th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
