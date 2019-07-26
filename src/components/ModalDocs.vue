<template>
  <div>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class="modal">
            <h1>Nový dokument</h1>
            <!-- <form @submit="formSubmit"> -->
              <form>
            <label for="docName">Název dokumentu</label>
            <input id="docName" type="text" class="form-control" v-model="docName">
            <input

             type="file"
             id="file"
             ref="fileInput"
             v-on:change="onFileSelected"/>
          <button v-on:click="$refs.fileInput.click()">Pickup File</button>
            <!-- <button v-on:click="onUpload()">Submit</button> -->
            <button class="btn btn-success" v-on:click="onUpload()">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </transition>
    <v-btn color="green" @click="isOpen = !isOpen;">
      {{ isOpen ? "Close" : "Nový dokument" }}</v-btn>
    <!-- <button @click="isOpen = !isOpen;">
      {{ isOpen ? "Close" : "Open" }} modal
    </button> -->
  </div>
</template>

<script>

</script>
<script>
import axios from 'axios';
import VueAxios from 'vue-axios'
    export default {
      name: 'ModalDocs',
        mounted() {
            console.log('Component mounted.');

        },
        data() {
            return {
              firstName: '',
              lastName: '',
              unit: '',
              part: '',
              isOpen: false,
              docName: ''
            };
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
            })
          }
        }
    }
</script>
<style scoped>
.modal {
  width: 500px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}
button {
  /* padding: 7px;
  margin-top: 10px;
  background-color: green;
  color: white;
  font-size: 1.1rem; */
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.btn-success {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
