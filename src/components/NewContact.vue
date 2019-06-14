<template>
  <header>

    <h1>SVJ2000</h1>
  </header>
</template>

<script>
// import Nav from './Nav.vue'
export default {
  name: 'NewContact',
  data () {
    return {
      greetings: 'hello'
    }
  },
  methods: {
    someMethod(){
      console.log(this.$parent);
      this.$parent.someMethod;
    }
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
  /* background-image: url("svj2000.png"); */
 background-color: lightgreen;
 background-size: 10%;
 width: 100%;
 height: 39px;
margin: 17px 0;
}
</style>
