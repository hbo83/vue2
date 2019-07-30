<template>
<div>
  <Header />
  <Nav />

  <div class="newContact">

    <v-flex xs6>
        <!-- <v-subheader>Vlastník</v-subheader> -->
      </v-flex>
      <v-flex xs6>
        <v-select
          v-model="e1"
          :items="owners"
          menu-props="auto"
          label="Vlastník"
          hide-details
          prepend-icon="face"
          single-line
        ></v-select>
      </v-flex>
    <v-app class="white">
      <v-form ref="form" lazy-validation>
        <!-- <v-subheader>Voda</v-subheader> -->
        <v-text-field v-model="name" :rules="nameRules" label="Hodnota vodoměru" required></v-text-field>
<!-- <v-subheader>Elektřina</v-subheader> -->
        <v-text-field v-model="phone" label="Hodnota elektroměru"></v-text-field>
<!-- <v-subheader>Plyn</v-subheader> -->
        <v-text-field v-model="email" :rules="emailRules" label="Hodnota plynoměru"></v-text-field>

        <v-btn @click="formSubmit" color="success">
          Uložit
        </v-btn>

      </v-form>
    </v-app>
  </div>
</div>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
import vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'

export default {
  name: 'Contacts_New',
  data() {
    return {
      e1: '',

        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' },
        ],
        owners: [
          'Habal', 'Hánová', 'Černá', 'Giňa',
          'Grugova'
        ],
      name: '',
      phone: '',
      email: '',
      nameRules: [
        v => !!v || 'Jméno je vyžadováno',
        v => v.length <= 30 || 'Jméno musí mít méně než 30 znaků'
      ],
      email: '',
      emailRules: [
        // v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail je zadán nesprávně'
      ]
    }
  },
  methods: {
    someMethod() {
      console.log(this.$parent);
      this.$parent.someMethod;
    },
    formSubmit(e) {
      e.preventDefault();
      this.isOpen = false;
      let currentObj = this;
      axios.post('http://localhost:8081/contact', {
        profession: this.profession,
        name: this.name,
        phone: this.phone,
        email: this.email
      }).then(this.$router.push({
        name: 'Contacts'
      })).then(alert("kontakt uložen"))
    }
  },
  mounted() {
    console.log('Odecty_New mounted');

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
  
  },
  components: {
    Header,
    Nav
  }
}
</script>
<style scoped>
.newContact {
  width: 29%;
  margin-left: 38%;

}
</style>
