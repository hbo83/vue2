<template>
<div>
  <Header />
  <Nav />

  <div class="editFault">
    <v-app class="white">
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="fault" :counter="30" label="Závada" required></v-text-field>

        <v-text-field v-model="partOfHouse" :counter="30" :rules="nameRules" label="Část domu" required></v-text-field>

        <v-text-field v-model="hurry" :counter="13" label="Spěchá" required></v-text-field>

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
      fault: '',
      partOfHouse: '',
      hurry: true,
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
    formSubmit(e) {
      e.preventDefault();
      this.isOpen = false;
      let currentObj = this;

      axios.put('http://localhost:8081/fault/' + this.id, {
        id: this.id,
        fault: this.fault,
        partOfHouse: this.partOfHouse,
        hurry: this.hurry,

      }).then(this.$router.push({
        name: 'Fault'
      })).then(alert("Závada změněna"))
    },
    delContact(id) {
      if (confirm('Určitě chcete smazat závadu?')) {

        console.log("mazu")
        axios.delete('http://localhost:8081/fault/' + id)
          .then((response) => {
            console.log(response.data);
            // this.contacts = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
      alert("Závada byl smazána")
      this.$router.push({
        name: 'Fault'
      })
    }
  },
  mounted() {
    //zde jsou namountována data z parametru předaného v komponentě contacts redirektem
    console.log(this.$route.params)
    this.fault = this.$route.params.fault
    this.partOfHouse = this.$route.params.partOfHouse
    this.hurry = this.$route.params.hurry

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
.editFault{
  width: 29%;
  margin-left: 38%;

}

</style>
