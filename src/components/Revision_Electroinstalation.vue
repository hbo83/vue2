<template>
<div>
  <Header />
  <Nav />

  <div class="electroInstalation">
  <p style="text-align: justify"><b>Účelem revize elektrických zařízení je ověřování jejich stavu z hlediska bezpečnosti. Požadavky bezpečnosti se považují za splněné,
     pokud elektrické zařízení odpovída z hlediska bezpečnosti příslušným ustanovením norem.</b></p>
  <v-app class="white">
  <!-- <table>
    <tr>
      <th>Datum poslední revize</th>
      <th>Datum příští revize</th>
    </tr>
    <tr>
      <td>{{date}}</td>
      <td>{{nextDate}}</td>
    </tr>
  </table> -->
      <!-- <v-flex xs12 sm6 md4> -->
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
      <!-- </v-flex> -->


      <!-- <table>
        <tr>
          <th>Kontaktní osoba</th>
        </tr>
        <tr>
          <td>Pavel Novák</td>
        </tr>
      </table> -->
    <v-btn style="margin-bottom: 380px" @click="formSubmit" color="success">
      Uložit
    </v-btn>
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


    }
  },
  computed: {
    nextDate: function() {
      let numDate = parseInt(this.date.substr(0, 4)) + 5
      let numDay = this.date.substr(4, 9)
      return numDate + numDay
    }
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      this.isOpen = false;
      let currentObj = this;

      axios.put('http://localhost:8081/revision/5d3d4967f21d7167583bf923', {
        id: '5d3d4967f21d7167583bf923',
        revTitle: 'Electroinstalation',
        revLast: this.date
      }).then(this.$router.push({
        name: 'Revision'
      })).then(alert("revize update" + this.date))
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
    console.log(new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString().substr(0, 10));
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
  width: 54%;
  margin-left: 26%;
  height: 100px;
}
#inspire {
  height: 150px;
}
/* .electroInstalation {
  .application--wrap {
    min-height: 1vh !important;
  }
} */
/* .application--wrap {
  min-height: 50px!important;
} */
</style>
