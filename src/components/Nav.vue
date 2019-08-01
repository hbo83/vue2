<template>
  <nav>
    <ul>
      <!-- <li v-bind:class="[i0.isActiveisActive ? 'red' : 'blue']" @click="toggleClass()"><router-link to = "/nastenka"><v-icon size="28px">home</v-icon>Nástěnka</router-link></li>
      <li v-bind:class="[i0.isActiveisActive ? 'red' : 'blue']" @click="toggleClass()"><router-link to = "/owners"><v-icon size="28px">person</v-icon>Spoluvlastníci</router-link></li> -->
      <li><router-link style="color: black;font-weight: bold" to = "/nastenka"><v-icon style="color: green" size="28px">home</v-icon>Nástěnka</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/owners"><v-icon style="color: blue" size="28px">person</v-icon>Spoluvlastníci</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/docs"><v-icon style="color: #a2a217" size="28px">archive</v-icon>Dokumenty</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/contacts"><v-icon style="color: purple" size="28px">contact_phone</v-icon>Kontakty</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/revision"><v-icon style="color: #9be19d" size="28px">alarm</v-icon>Revize</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/odecty"><v-icon style="color: #fe9354f2" size="28px">report</v-icon>Odečty</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/meeting"><v-icon style="color: #bb8897" size="28px">people</v-icon>Schůze</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/fault"><v-icon style="color: #64acce" size="28px">healing</v-icon>Závady</router-link></li>
      <!-- <li><router-link style="color: black;font-weight: bold" to = "/ucetnictvi"><v-icon style="color: black" size="28px">folder_open</v-icon>Ucetnictvi</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/nastaveni"><v-icon style="color: black" size="28px">apps</v-icon>Nastavení</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/faq"><v-icon style="color: black" size="28px">contact_support</v-icon>FAQ</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/hints"><v-icon style="color: black" size="28px">thumb_up</v-icon>Důležité rady</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/galerie"><v-icon style="color: black" size="28px">thumb_up</v-icon>Galerie</router-link></li> -->
    </ul>
  </nav>
</template>

<script>
export default {
name: 'Nav',
data() {
  return {

      i0: {
        isActive: true
    }
  }
},
methods: {
  toggleClass: function() {
    if(this.i0.isActive){
      this.i0.isActive = false;
    } else {
      this.i0.isActive = true;
    }
  }
}
}
</script>

<style scoped>

nav {
  box-sizing: border-box;
  width: 10%;
  /* border: 1px solid black; */
  height: 800px;
  float: left;
}
li a {
  line-height: 49px;
  font-size: 20px;
  text-decoration: none;
  display: block;
  text-align: left;
  margin-left: 12px;
  opacity: 0.7;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li:hover {
  color: red;
}
/* a:link, a:visited, a:active  {
  color: grey;
} */
a:hover {
  /* color: black; */
  cursor: pointer;
  opacity: 1;
}
li i {
  margin-right: 12px
}
.red {
  color: green;
}
.blue {
  color: blue;
}

</style>
