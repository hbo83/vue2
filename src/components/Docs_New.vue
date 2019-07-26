<template>
<div>
  <Header />
  <Nav />

  <div class="newDoc">
    <v-app class="white">
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="docName" :counter="30" label="Název dokumentu" required></v-text-field>



        <input

         type="file"
         id="file"
         ref="fileInput"
         v-on:change="onFileSelected"/>
      <!-- <button v-on:click="$refs.fileInput.click()">Pickup File</button> -->

        <button class="btn btn-success" v-on:click="onUpload()">Submit</button>

        <!-- <v-btn @click="formSubmit" color="success">
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

export default {
  name: 'Docs_New',
  data() {
    return {
      docName: ''
    }
  },
  methods: {
    onFileSelected( event ) {
      console.log( event );

      this.selectedFile = event.target.files[0]
    },
    onUpload() {
      console.log( this.docName );//data
      var docName = this.docName;
      const fd = new FormData();
      fd.append('name', docName);//pripoji klic a hodnotu, ktera se pak sparsuje jako req.body.name na serveru
      fd.append('productImage', this.selectedFile, this.selectedFile.name)
      axios.post('http://localhost:8081/img', fd, {
        onUploadProgress: uploadEvent => {
          console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%');
        }
      })
      .then( res => {
        console.log(res);
        alert('Soubor byl nahrán')
      }).then(this.$router.push({
        name: 'Docs'
      }))
    }
  },
  mounted() {
    console.log(789)
  },
  components: {
    Header,
    Nav
  }
}
</script>
<style scoped>
.newDoc {
  width: 29%;
  margin-left: 38%;

}
</style>
