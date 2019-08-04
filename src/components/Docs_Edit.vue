<template>
<div>
  <Header />
  <Nav />

  <v-btn style="float: left; margin-left: 60px" fab width="80px" small color="info" to="/docs">
    <v-icon large>arrow_back</v-icon>
  </v-btn>
  <div class="editDoc">
    <v-app class="white">
      <v-form ref="form" lazy-validation>

        <v-text-field v-model="name" :counter="30" label="Jméno" required></v-text-field>

        <v-btn @click="formSubmit" color="success">
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
      name: '',
      id: ''
    }
  },
  methods: {

    formSubmit(e) {
      e.preventDefault();

      axios.put('http://localhost:8081/doc/' + this.id, {

        name: this.name

      }).then(this.$router.push({
        name: 'Docs'
      })).then(alert("Název změněn"))
    },
    delContact(id) {
      if (confirm('Určitě chcete smazat soubor?')) {

        console.log("mazu")
        axios.delete('http://localhost:8081/doc/' + id)
          .then((response) => {
            console.log(id);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      alert("Kontakt byl smazán")
      this.$router.push({
        name: 'Docs'
      })
    }
  },
  mounted() {
    //zde jsou namountována data z parametru předaného v komponentě redirektem
    console.log(this.$route.params)
    this.name = this.$route.params.name
    console.log(this.id)
  },
  components: {
    Header,
    Nav
  }
}
</script>
<style scoped>
.editDoc {
  width: 29%;
  margin-left: 38%;

}
</style>
