<template>
  <div>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class="modal">
            <h1>Nový kontakt</h1>
            <form @submit="formSubmit">
            <label for="firstName">First Name</label>
            <input id="firstName" type="text" class="form-control" v-model="firstName">
            <strong>lastName:</strong>
            <input type="text" class="form-control" v-model="lastName">
            <strong>phone:</strong>
            <input type="text" class="form-control" v-model="phone">
            <button class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </transition>
    <v-btn color="green" @click="isOpen = !isOpen;">
      {{ isOpen ? "Close" : "Nový kontakt" }}</v-btn>
    <!-- <button @click="isOpen = !isOpen;">
      {{ isOpen ? "Close" : "Open" }} modal
    </button> -->
  </div>
</template>

<script>
// export default {
//   data: function() {
//     return {
//       isOpen: false
//     };
//   }
// };
</script>
<script>
import axios from 'axios';
import VueAxios from 'vue-axios'
    export default {
      name: 'Modal',
        mounted() {
            console.log('Component mounted.');

        },
        data() {
            return {
              firstName: '',
              lastName: '',
              phone: '',
              isOpen: false
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                axios.post('http://localhost:8081/contact', {
                  firstName: this.firstName,
                      lastName: this.lastName,
                      phone: this.phone
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
</style>
