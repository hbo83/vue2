<template>
<div>
  <Header />
  <Nav />
<v-btn style="float: left; margin-left: 60px" fab width="80px" small color="info" to="/contacts">
  <v-icon large>arrow_back</v-icon>
</v-btn>
  <div class="editContact">
    <v-app class="white">
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="profession" :counter="30" label="Profese" required></v-text-field>

        <v-text-field v-model="name"  :counter="30" label="Jméno" required></v-text-field>

        <v-text-field v-model="phone"  :counter="13" label="Telefon" required></v-text-field>

        <v-text-field v-model="email" label="E-mail" required></v-text-field>

        <v-btn @click="editContact" color="success">
          Uložit změnu
        </v-btn>

        <v-btn @click="delContact(id)" color="error">
          Smazat kontakt
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
  name: 'EditContact',
  data() {
    return {
      profession: '',
      name: '',
      phone: '',
      email: '',
      id: '',
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
    someMethod(e) {
      console.log(e);
      this.$parent.someMethod;
    },
    editContact(e) {

      axios.put('http://localhost:8081/contact/' + this.id, {
        id: this.id,
        profession: this.profession,
        name: this.name,
        phone: this.phone,
        email: this.email
      }).then(this.$router.push({
        name: 'Contacts'
      })).then(alert("Kontakt změněn"))
    },
    delContact(id) {
      // zajmavy je, ze kdyz promptty odklikam rychle tak mi to nacte smazanej kontakt a kdyz pomalu tak uz tam neni
      if (confirm('Určitě chcete smazat kontakt?')) {

        axios.delete('http://localhost:8081/contact/' + id)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      alert("Kontakt byl smazán")
      this.$router.push({
        name: 'Contacts'
      })
    }
  },
  mounted() {
    //zde jsou namountována data z parametru předaného v komponentě contacts redirektem
    console.log(this.$route.params)
    this.profession = this.$route.params.profession
    this.name = this.$route.params.name
    this.phone = this.$route.params.phone
    this.email = this.$route.params.email
    this.id = this.$route.params._id
    console.log(this.id)
  },
  components: {
    Header,
    Nav
  }
}
</script>
<style scoped>
.editContact {
  width: 29%;
  margin-left: 38%;
}
</style>
