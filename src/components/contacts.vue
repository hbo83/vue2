<template>
<div>
  <Header />
  <Nav />

  <div class="contacts">
    <!-- pokud zanoruju routy, musim mit pokazdy router-view v ty komponente do ktery chci zanorit -->
    <router-view></router-view>
    <!-- proste tam dam hint at oznaci radku s kterou chtej pracovat -->
    <table>
      <thead>
        <tr>
          <th>Profese</th>
          <th>Jméno</th>
          <th>Telefon</th>
          <th>E-mail</th>
        </tr>
      </thead>

      <tr @click="selectRow(contact)" v-for="contact in contacts">
        <td>{{ contact.profession }}</td>
        <td>{{ contact.name }}</td>
        <td>{{ contact.phone }}</td>
        <td>{{ contact.email }}</td>
      </tr>
    </table>

  </div>

  <v-btn fab width="80px" small color="info" to="/contacts/Contacts_New">
    <v-icon large>add</v-icon>
  </v-btn>

</div>
</template>

<script>
import vue from 'vue';
import Header from './Header.vue'
import Nav from './Nav.vue'
// import ModalContacts from './ModalContacts.vue'
// import ModalContactSave from './ModalContactSave.vue'
import NewContact from './Contacts_New.vue'

import axios from 'axios';


export default {
  name: 'Kontakty',
  data() {
    return {
      contacts: [],
      editData: {
        modalContactSaveOpen: false,
        id: null
      }
    }
  },
  components: {
    Header,
    Nav
    // ModalContacts,
    // ModalContactSave
  },
  methods: {
    selectRow(contact) {
      console.log(event.target.parentNode.parentNode.childNodes)
      // console.log(id)
      //po kliknutí na řádek s kontaktem, redirekt na EditContact s předáním parametrů kliknutého kontaktu. V komponentě EditContact jsou předaná data namountována do formuláře.
      this.$router.push({
        name: 'Contacts_Edit',
        params: contact
      })
    },
    initCurrentId(id) {
      this.editData.modalContactSaveOpen = !this.editData.modalContactSaveOpen
      this.editData.id = id;
    },
    closeFunc() {
      this.editData.modalContactSaveOpen = false;
    },
    say: function(message) {
      alert(message)
    },
    add(contact) {
      this.contacts.push(contact);
      console.log(contact);
    },
    edit(contact) {
      alert("edit");
    },
    delContact(id) {
      axios.delete('http://localhost:8081/contact/' + id)
        .then((response) => {
          console.log(response.data);
          // this.contacts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      var index = this.contacts.findIndex(i => i._id == id);
      console.log(index);
      if (index === 0) {
        this.contacts.splice(0, 1);
      } else {
        this.contacts.splice(index, 1);
      }
      console.log(this.contacts);
    }
  },

  mounted() {
    //po vymazani kontaktu mi axios vracel stary data, zrejme nakesovany, musel jsem zde vypnou cashovani
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    };
    axios.get('http://localhost:8081/contacts', config)
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
.contacts {
  width: 80%;
  height: auto;
  overflow: auto;
  max-height: 600px;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;

}

.contacts table {
  width: 100%;
  border-collapse: collapse;
}

.contacts td,
.contacts th {
  border-bottom: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.contacts tr:hover {
  background-color: #ddd;
  cursor: pointer;
}

.contacts th {
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
