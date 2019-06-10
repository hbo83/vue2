<template>
  <div>
    <Header />
    <Nav />

    <div class="kontakty">
    <table>
<thead>
  <tr>
    <th>Profese</th>
    <th>Jméno</th>
    <th>Telefon</th>
    <th>E-mail</th>
  </tr>
</thead>

<tr v-for="contact in contacts">
  <td>{{ contact.profession }}</td>
  <td>{{ contact.name }}</td>
  <td>{{ contact.phone }}</td>
  <td>{{ contact.email }}</td>
</tr>
    </table>

<ModalContacts v-bind:ninjas="ninjas" @sayHello="onSayHello"/>

    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
import ModalContacts from './ModalContacts.vue'
// import Formular from './Formular.vue'

import axios from 'axios';


export default {
  name: 'Kontakty',
  data () {
    return {
      contacts: [],
      ninjas:
{ name: 'ryu' }


    }
  },
  components: {
    Header,
    Nav,
    ModalContacts
  },
  methods: {
    say: function (message) {
      alert(message)
    },
    onSayHello() {
      alert(this.ninjas.name);
    }
  },
  mounted() {
      axios.get('http://localhost:8081/contacts')
      .then((response) => {
        console.log(response.data);
        this.contacts = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.kontakty {
  width: 80%;
  height: auto;
  /* border: 1px solid black; */
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}

.kontakty table {
  width: 100%;
}
.kontakty td, .kontakty th {
  /* border: 1px solid #ddd; */
  padding: 8px;
}

.kontakty tr:nth-child(even){background-color: #f2f2f2;}

.kontakty tr:hover {background-color: #ddd; cursor: pointer;}

.kontakty th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
