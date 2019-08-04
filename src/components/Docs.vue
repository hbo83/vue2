<template>
<div>
  <!-- <h1>{{ msg }}</h1> -->
  <Header />
  <Nav />

  <div class="dokumenty">


    <table>
      <tr>
        <th>Název dokumentu</th>
        <th>Změněno</th>
        <th>Odkaz na stažení</th>
      </tr>
      <tr @click="selectRow(img)" v-for="img in imgs">
        <td>{{ img.name }}</td>
        <td>{{ img.modified }}</td>
        <!-- <td><a href="http">{{ ahref + img.productImage.slice(8) }}</a></td> -->
        <!-- <td><button class="btn btn-success" v-on:click="docDownload()">stáhnout</button></td> -->
        <td><v-btn small @click="docDownload()" color="success">
          stáhnout
        </v-btn></td>
      </tr>
    </table>

    <div class="container">
      <!-- <div class="large-12 medium-12 small-12 cell"> -->

      <!-- <input
         style="display: none"
         type="file"
         id="file"
         ref="fileInput"
         v-on:change="onFileSelected"/> -->
      <!-- <button v-on:click="$refs.fileInput.click()">Pickup File</button> -->
      <!-- <button v-on:click="onUpload()">Submit</button> -->
      <!-- </div> -->
    </div>
  </div>
  <v-btn fab width="80px" small color="info" to="/docs/Docs_New">
    <v-icon large>add</v-icon>
  </v-btn>
</div>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'

import axios from 'axios';

export default {
  name: 'Docs',
  data() {
    return {
      selectedFile: null,
      imgs: [],
      ahref: "http://localhost:8081/uploads/"
    }
  },
  mounted() {
    console.log("Docs mounted");
    this.userGlobal = localStorage.getItem("userLoged");
    console.log(this.userGlobal);
    var request = {
      params: {
        login: [this.userGlobal]
      },
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    }
    axios.get('http://localhost:8081/getimg', request)
      .then((response) => {
        console.log(response.data);
        // console.log(this.msg);
        this.imgs = response.data;
        // console.log(this.user);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    Header,
    Nav
  },
  methods: {
    selectRow(doc) {
      console.log(event.target.parentNode.parentNode.childNodes)
      // console.log(id)
      //po kliknutí na řádek s kontaktem, redirekt na EditContact s předáním parametrů kliknutého kontaktu. V komponentě EditContact jsou předaná data namountována do formuláře.
      this.$router.push({
        name: 'Docs_Edit',
        params: doc
      })
    },
    onFileSelected(event) {
      console.log(event);
      this.selectedFile = event.target.files[0]
    },
    docDownload() {
// event.stopPropagation();
// console.log(event.target)
      axios({
        url: 'http://localhost:8081/uploads/1559716291268-bohol.png',
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.png');
        document.body.appendChild(link);
        link.click();
      });
    },
    onUpload() {
      const fd = new FormData(); //vytvori formular
      fd.append('name', 'value1'); //pripoji klic a hodnotu, ktera se pak sparsuje jako req.body.name na serveru

      fd.append('productImage', this.selectedFile, this.selectedFile.name)
      axios.post('http://localhost:8081/img', fd, {
          onUploadProgress: uploadEvent => {
            console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%');
          }
        })
        .then(res => {
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
  margin-left: 30px;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;

}

.dokumenty table {
  width: 100%;
  border-collapse: collapse;
}

.dokumenty td,
.dokumenty th {
  border-bottom: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}


.dokumenty tr:hover {
  background-color: #ddd;
  cursor: pointer
}

.dokumenty th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #a2a217;
  color: white;
}
</style>
