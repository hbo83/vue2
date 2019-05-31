<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Vue Axios Post - ItSolutionStuff.com</div>

                    <div class="card-body">
                        <form @submit="formSubmit">
                        <strong>firstName:</strong>
                        <input type="text" class="form-control" v-model="firstName">
                        <strong>lastName:</strong>
                        <input type="text" class="form-control" v-model="lastName">
                        <strong>phone:</strong>
                        <input type="text" class="form-control" v-model="phone">
                        <button class="btn btn-success">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import VueAxios from 'vue-axios'
    export default {
      name: 'Formular',
        mounted() {
            console.log('Component mounted.');

        },
        data() {
            return {
              firstName: '',
              lastName: '',
              phone: ''
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
