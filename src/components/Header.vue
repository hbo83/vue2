<template>
<header>

  <h1>SVJ2000</h1>
  <h3 style="font-size: 15px; text-align: left; margin-left: 217px; color: white;">- s námi je správa domu hračka</h3>
  <p style="text-align: right">{{ readLocalStorage() }}<span>
      <v-icon @click="redirLogin" to="/login" style="color: white; float: right; margin-right: 20px;cursor: pointer;" size="28px">account_box</v-icon>
    </span></p>
</header>
</template>

<script>
// import Nav from './Nav.vue'
export default {
  name: 'Header',
  data() {
    return {
      userLoged: 'hello'
    }
  },
  methods: {
    someMethod() {
      console.log(this.$parent);
      this.$parent.someMethod;
    },
    redirLogin() {
      window.location.href = "http://localhost:8080/login";
    },
    readLocalStorage() {
      let x = localStorage.getItem("userLoged");
      return x
    }
  },
  mounted() {
    console.log("Header was mounted")
  }

}
</script>
<style scoped>
h1 {
  font-size: 20px;
  color: white;
  display: block;
  margin-right: 1392px;
}

header {
  /* src components */
  background-image: url("flatHouse.png");
  background-color: #9eceff;
  background-size: 4%;
  width: 100%;
  height: 76px;
  margin-bottom: 17px;
}
</style>
