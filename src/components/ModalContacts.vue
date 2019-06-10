<template>
  <div>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class="modal">
            <button class="btn btn-back" @click="isOpen = !isOpen;">Zpět</button>
            <h1>Nový kontakt</h1><h1>{{ ninjas.name }}</h1>
            <form @submit="formSubmit">
            <input id="firstName" type="text" class="form-control" v-model="profession" placeholder="Povolání">
            <input type="text" class="form-control" v-model="name" placeholder="Jméno">
            <input type="text" class="form-control" v-model="phone" placeholder="Kontakt">
            <input type="text" class="form-control" v-model="email" placeholder="E-mail">
            <button class="btn btn-success">Uložit</button>
            <button class="btn btn-success" @click="sayHello">pozdrav</button>
            </form>
          </div>
        </div>
      </div>
    </transition>
    <v-btn color="green" @click="isOpen = !isOpen;">
      {{ isOpen ? "Close" : "Nový kontakt" }}</v-btn>
  </div>
</template>


<script>
import axios from 'axios';
import VueAxios from 'vue-axios'
    export default {
      name: 'ModalContacts',
        mounted() {
            console.log('Component mounted.');

        },
        props: ['ninjas'],

        data() {
            return {
              profession: '',
              name: '',
              phone: '',
              email: '',
              isOpen: false
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                this.isOpen = false;
                let currentObj = this;
                axios.post('http://localhost:8081/contact', {
                  profession: this.profession,
                      name: this.name,
                      phone: this.phone,
                      email: this.email
                }).then(alert("kontakt uložen"))

            },
            sayHello() {
              this.$emit('sayHello', 'Hello');
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
  opacity: 0.5;
}

.fadeIn-leave-active {
  opacity: 0.5;
  transition: all 0.8s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
button {
  /* padding: 7px;
  margin-top: 10px;
  background-color: green;
  color: white;
  font-size: 1.1rem; */
}
h1 {
  font-weight: 100;
  display: block;
  float: left;
}
 input[type=text] {
  font-weight: 700;
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
.btn-back {
  width: 15%;
  background-color: red;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block;
}
</style>
