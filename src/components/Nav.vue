<template>
  <nav>
    <ul>
      <li><router-link to = "/nastenka"><v-icon size="28px">home</v-icon>Nástěnka</router-link></li>
      <li><router-link to = "/spoluvlastnici"><v-icon size="28px">person</v-icon>Spoluvlastníci</router-link></li>
      <li><router-link to = "/dokumenty"><v-icon size="28px">archive</v-icon>Dokumenty</router-link></li>
      <li><router-link to = "/kontakty"><v-icon size="28px">contact_phone</v-icon>Kontakty</router-link></li>
      <li><router-link to = "/revize"><v-icon size="28px">alarm</v-icon>Revize</router-link></li>
      <li><router-link to = "/odecty"><v-icon size="28px">report</v-icon>Odečty</router-link></li>
      <li><router-link to = "/schuze"><v-icon size="28px">people</v-icon>Schůze</router-link></li>
      <li><router-link to = "/zavady"><v-icon size="28px">healing</v-icon>Závady</router-link></li>
      <li><router-link to = "/nastaveni"><v-icon size="28px">trip_origin</v-icon>Nastavení</router-link></li>
      <li><router-link to = "/faq"><v-icon size="28px">trip_origin</v-icon>FAQ</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

nav {
  box-sizing: border-box;
  width: 10%;
  border: 1px solid black;
  height: 800px;
  float: left;
}
li a {
  line-height: 49px;
  font-size: 20px;
  text-decoration: none;
  display: block;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  margin-top: 0px;
  border: 1px solid black;
  height: 50px;
  background-color: rgba(255,159,36,1);

}
a:hover {
  background-color: green;
  cursor: pointer;
}

</style>
