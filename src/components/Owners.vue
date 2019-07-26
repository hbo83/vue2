<template>
<div>
  <!-- <h1>{{ msg }}</h1> -->
  <Header />
  <Nav />

  <div class="owners">


    <table>
      <thead>
        <tr>
          <th>Jméno</th>
          <th>Adresa</th>
          <th>Podíl</th>
          <th>Telefon</th>
          <th>E-mail</th>
        </tr>
      </thead>

      <tr @click="selectRow(owner)" v-for="owner in owners">
        <td>{{ owner.name }}</td>
        <td>{{ owner.address }}</td>
        <td>{{ owner.part }}</td>
        <td>{{ owner.phone }}</td>
        <td>{{ owner.email }}</td>
      </tr>
    </table>
    <!-- <ModalOwner /> -->

  </div>

  <v-btn fab width="80px" small color="info" to="/owners/Owners_New">
    <v-icon large>add</v-icon>
  </v-btn>

</div>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'



import axios from 'axios';
export default {
  name: 'Owners',
  data() {
    return {
      owners: []
    }
  },
  components: {
    Header,
    Nav

  },
  methods: {
    selectRow(owner) {
      console.log(event.target.parentNode.parentNode.childNodes)
      // console.log(id)
      //po kliknutí na řádek s kontaktem, redirekt na EditContact s předáním parametrů kliknutého kontaktu. V komponentě EditContact jsou předaná data namountována do formuláře.
      this.$router.push({
        name: 'Owners_Edit',
        params: owner
      })
    },
  },
  mounted() {
    //po vymazani kontaktu mi axios vracel stary data, zrejme nakesovany, musel jsem zde vypnou cashovani
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    };
    axios.get('http://localhost:8081/owners', config)
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

<style scoped>
.owners {
  width: 80%;
  height: auto;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
}

.owners table {
  width: 100%;
  border-collapse: collapse;
}

.owners td,
.owners th {
  border-bottom: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.owners tr:hover {
  background-color: #ddd;
  cursor: pointer;
}

.owners th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
