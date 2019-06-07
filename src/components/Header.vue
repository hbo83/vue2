<template>
  <header>

    <span @click="someMethod">Click me!</span>
  </header>
</template>

<script>
// import Nav from './Nav.vue'
export default {
  name: 'Header',
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
header {
  /* background-image: url("svj2000.png"); */
 background-color: lightgreen;
 background-size: 10%;
 width: 100%;
 height: 50px;
margin: 10px;
}
</style>
