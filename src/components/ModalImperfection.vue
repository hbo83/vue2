<template>
  <div id="trans">
    <transition name="fade">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class="modal">
            <button class="btn btn-back" @click="isOpen = !isOpen;">Zpět</button>
            <h1>Nová závada</h1>
            <form @submit="formSubmit">
            <input type="text" class="form-control" v-model="imperfection" placeholder="Závada">
            <input type="text" class="form-control" v-model="created" placeholder="Vytvořeno">
            <input type="text" class="form-control" v-model="hurry" placeholder="Spěchá">
            <button class="btn btn-success">Uložit</button>

            </form>
          </div>
        </div>
      </div>
    </transition>

    <v-btn v-if="!isOpen" color="green" @click="isOpen = !isOpen;">
      {{ isOpen ? "Close" : "Nová závada" }}</v-btn>
  </div>
</template>

<script>
import axios from 'axios';
import VueAxios from 'vue-axios'
    export default {
      name: 'ModalImperfection',
        mounted() {
            console.log('Component mounted.');

        },
        data() {
            return {
              imperfection: '',
              created: '',
              hurry: '',
              isOpen: false
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                axios.post('http://localhost:8081/imperfection', {
                  imperfection: this.imperfection,
                      created: this.created,
                      hurry: this.hurry

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
.displayed {
  display: block;
}
.displayedNot {

}
.fade-enter-active,
      .fade-leave-active {
        transition: opacity 1s;
      }
      /* .fade-leave-active below version 2.1.8 */
      .fade-enter,
      .fade-leave-to {
        opacity: 0;
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
