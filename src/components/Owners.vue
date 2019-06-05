<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <Header />
    <Nav />

    <div class="owners">


<table>
<thead>
<tr>
<th>Kategorie</th>
<th>Jméno</th>
<th>Kontakt</th>
</tr>
</thead>

<tr v-for="owner in owners">
<td>{{ owner.firstName }}</td>
<td>{{ owner.lastName }}</td>
<td>{{ owner.part }}</td>
</tr>
</table>
<ModalOwner />

    </div>
  </div>

</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
import ModalOwner from './ModalOwner.vue'
import axios from 'axios';
export default {
  name: 'Owners',
  data () {
    return {
      owners: []
    }
  },
  components: {
    Header,
    Nav,
    ModalOwner
  },
  mounted() {
      axios.get('http://localhost:8081/owners')
      .then((response) => {
        console.log(response.data);
        console.log(this.msg);
        this.owners = response.data;
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

.owners {
  width: 80%;
  height: auto;
  border: 1px solid black;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}

.owners table {
  width: 100%;
}
.owners td, .owners th {
  border: 1px solid #ddd;
  padding: 8px;
}

.owners tr:nth-child(even){background-color: #f2f2f2;}

.owners tr:hover {background-color: #ddd;}

.owners th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
