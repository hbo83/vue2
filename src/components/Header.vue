<template>
  <header>

    <h1>SVJ2000 s námi je správa domu hračka</h1>
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
