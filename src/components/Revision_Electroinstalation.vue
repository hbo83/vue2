<template>
<div>
  <Header />
  <Nav />

  <div class="electroInstalation">
  <p>Účelem revize elektrických zařízení je ověřování jejich stavu z hlediska bezpečnosti. Požadavky bezpečnosti se považují za splněné, pokud elektrické zařízení odpovída z hlediska bezpečnosti příslušným ustanovením norem.</p>
  <v-app id="inspire">
  <p>Lhůta revize: 1x za 5 let</p>
      <v-flex xs12 sm6 md4>
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Datum poslední revize"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-flex>
  <p>datum příští revize: 2024-5-6</p>
    <!-- </v-layout> -->
  </v-app>


    <v-app class="white">
      <v-form ref="form" lazy-validation>


        <p>kontakt na revizaka - vyber z kontaktu</p>

        <v-btn @click="formSubmit2" color="success">
          Uložit
        </v-btn>

          <!-- <v-btn @click="al(date)" color="success">
            Uložit
          </v-btn> -->

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
import UploadButton from 'vuetify-upload-button';


export default {
  name: 'Revision_Electroinstalation',
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,

      profession: '',
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
    formSubmit2(e) {
      e.preventDefault();
      this.isOpen = false;
      let currentObj = this;

      axios.put('http://localhost:8081/revision/5d3d4967f21d7167583bf923', {
        id: '5d3d4967f21d7167583bf923',
        revTitle: 'Electroinstalation',
        revLast: this.date,
        revLast: this.date
      }).then(this.$router.push({
        name: 'Revision'
      })).then(alert("revize update" + this.date))
    },
    formSubmit(e) {
      e.preventDefault();
      this.isOpen = false;
      let currentObj = this;
      axios.post('http://localhost:8081/revision', {
        revTitle: 'Electroinstalation',
        revLast: this.date,
        revLast: this.date
      }).then(this.$router.push({
        name: 'Revision'
      })).then(alert("revize uložena"))
    },
    update(file) {
      this.selectedFile = event.target.files[0]
      console.log(this.docName); //data
      var docName = this.docName;
      const fd = new FormData();
      fd.append('name', docName); //pripoji klic a hodnotu, ktera se pak sparsuje jako req.body.name na serveru
      fd.append('productImage', this.selectedFile, this.selectedFile.name)
      axios.post('http://localhost:8081/img', fd, {
          onUploadProgress: uploadEvent => {
            console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%');
          }
        })
        .then(res => {
          console.log(res);
          alert('Soubor byl nahrán')
        }).then(this.$router.push({
          name: 'Docs'
        }))
    },
    onFileSelected(event) {
      console.log(event);

      this.selectedFile = event.target.files[0]
    }
  },
  mounted() {
    console.log('Docs_New.vue mounted')
  },
  components: {
    Header,
    Nav,
    'upload-btn': UploadButton
  }
}
</script>
<style scoped>
.electroInstalation {
  width: 29%;
  margin-left: 38%;

}
</style>
