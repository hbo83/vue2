<template>
<div>
  <Header />
  <Nav />

  <v-btn style="float: left; margin-left: 60px" fab width="80px" small color="info" to="/docs">
    <v-icon large>arrow_back</v-icon>
  </v-btn>
  <div class="newDoc">
    <v-app class="white">
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="docName" :counter="30" label="Název dokumentu" required></v-text-field>
        <upload-btn round @file-update="update"><template slot="icon">
            <v-icon>add</v-icon>
          </template></upload-btn>

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
  name: 'Docs_New',
  data() {
    return {
      userGlobal: '',
      docName: ''
    }
  },
  methods: {
    update(file) {
      this.selectedFile = event.target.files[0]
      console.log(this.docName); //data
      var docName = this.docName;
      const fd = new FormData();
      fd.append('userGlobal', this.userGlobal);
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
    console.log('Docs_New.vue mounted');
    this.userGlobal = localStorage.getItem("userLoged");
    console.log(this.userGlobal);
  },
  components: {
    Header,
    Nav,
    'upload-btn': UploadButton
  }
}
</script>
<style scoped>
.newDoc {
  width: 29%;
  margin-left: 38%;

}
</style>
