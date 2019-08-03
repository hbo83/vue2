<template>
<header>

  <h1>SVJ2000</h1>
  <h3 style="font-size: 15px; text-align: left; margin-left: 217px; color: white;">- s námi je správa domu hračka</h3>
  <p style="text-align: right; color: white;"><b>{{ userLoged }}</b><span>
      <v-icon @click="redirLogin" to="/login" style="color: white; float: right; margin-right: 20px;cursor: pointer; margin-left: 10px;" size="28px">{{logedYesNo()}}</v-icon>
    </span></p>

</header>
</template>

<script>
// import Nav from './Nav.vue'
export default {
  name: 'Header',
  data() {
    return {
      userLoged: '',
      loged: true
    }
  },
  methods: {
    logedYesNo() {

      let x = localStorage.getItem("userLoged");
      if (x) {
        return "exit_to_app"
        console.log(x)
      } else if (x === null) {
        return "account_box"
        console.log(x)
      }
    },
    someMethod() {
      console.log(this.$parent);
      this.$parent.someMethod;
    },
    redirLogin() {
      let x = localStorage.getItem("userLoged");
      if (x) {
        var txt;
        if (confirm("Opravdu se chcete odhlásit?")) {
          txt = "Nyní jste odhlášeni!";
          localStorage.removeItem("userLoged");
          window.location.href = "http://localhost:8080/login";
          this.loged === false;
          alert(txt);
        }

      } else {
        window.location.href = "http://localhost:8080/login";

      }
    }
  },
  mounted() {

  },
  created() {
    setTimeout(() => {
      console.log("Header was mounted");
      this.userLoged = localStorage.getItem("userLoged");
      console.log(this.userLoged);
    }, 1000)
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
