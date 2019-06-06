<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <Header />
    <Nav />

    <div class="revize">


        <table>
      <tr>
        <th>Předmět revize</th>
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
  name: 'Revize',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header,
    Nav
  },
  mounted() {
      axios.get('http://localhost:8081/meetings')
      .then((response) => {
        console.log(response.data);
        console.log(this.msg);
        this.contacts = response.data;
        console.log(this.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.revize {
  width: 80%;
  height: 500px;
  border: 1px solid black;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}

.revize table {
  width: 100%;
}
.revize td, .revize th {
  border: 1px solid #ddd;
  padding: 8px;
}

.revize tr:nth-child(even){background-color: #f2f2f2;}

.revize tr:hover {background-color: #ddd;}

.revize th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
