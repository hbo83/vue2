<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <Header />
    <Nav />

    <div class="dokumenty">


        <table>
      <tr>
        <th>Dokumenty</th>
        <th>Jednotka</th>
        <th>Podíl</th>
      </tr>

    </table>
<div class="container">
    <!-- <div class="large-12 medium-12 small-12 cell"> -->

        <input
         style="display: none"
         type="file"
         id="file"
         ref="fileInput"
         v-on:change="onFileSelected"/>
      <button v-on:click="$refs.fileInput.click()">Pickup File</button>
        <button v-on:click="onUpload()">Submit</button>
    <!-- </div> -->
  </div>
    </div>
  </div>

</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'

import axios from 'axios';

export default {
  name: 'Dokumenty',
  data () {
    return {
      selectedFile: null
    }
  },
  components: {
    Header,
    Nav
  },
  methods: {
    onFileSelected( event ) {
      console.log( event );
      this.selectedFile = event.target.files[0]
    },
    onUpload() {
      const fd = new FormData();
      fd.append('productImage', this.selectedFile, this.selectedFile.name)
      axios.post('http://localhost:8081/img', fd, {
        onUploadProgress: uploadEvent => {
          console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%');
        }
      })
      .then( res => {
        console.log(res);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dokumenty {
  width: 80%;
  height: 500px;
  border: 1px solid black;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}

.dokumenty table {
  width: 100%;
}
.dokumenty td, .dokumenty th {
  border: 1px solid #ddd;
  padding: 8px;
}

.dokumenty tr:nth-child(even){background-color: #f2f2f2;}

.dokumenty tr:hover {background-color: #ddd;}

.dokumenty th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
