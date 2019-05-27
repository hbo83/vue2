<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <Header />
    <Nav />
  </div>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header,
    Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
