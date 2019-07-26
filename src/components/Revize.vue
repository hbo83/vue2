<template>
  <div>
    <Header />
    <Nav />

    <div class="revize">
      <p>V případě vzniku požáru či úrazu, se vždy hledá jeho příčina, ať už ze strany Policie nebo pojišťovny. Pokud vyšetřování určí, že příčinou byla třeba závada na elektroinstalaci, pak následně se pátrá kdo je za to zodpovědný a zda nezanedbal některou ze svých povinností. Pojišťovna při neodborné kontrole, neplatné revizi nebo dokonce její absenci, ve většině případů krátí pojistné plnění nebo neuhradí vzniklou škodu způsobenou na těchto zařízeních.</p>
    <table>
      <tr>
        <th>Předmět revize</th>
        <th>Podslední revize</th>
        <th>Příští revize</th>
      </tr>
      <tr v-for="revision in revisions">
        <td>{{ revision.revTitle }}</td>
        <td>{{ revision.revLast }}</td>
        <td>{{ revision.revNext }}</td>
      </tr>
    </table>
    <ModalRevision />
  </div>

    </div>
  </div>

</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
import axios from 'axios';
import ModalRevision from './ModalRevision.vue';

export default {
  name: 'Revize',
  data () {
    return {
      revisions: []
    }
  },
  components: {
    Header,
    Nav,
    ModalRevision
  },
  mounted() {
      axios.get('http://localhost:8081/revisions')
      .then((response) => {
        console.log(response.data);
        this.revisions = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.revizeNav {
  width: 10%;
  height: 500px;
  border: 1px solid black;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  box-sizing: border-box;

  border: 1px solid black;


}

.revize table {
  width: 70%;
}
.revize td, .revize th {
  border: 1px solid #ddd;
  padding: 8px;
}

.revize tr:nth-child(even){background-color: #f2f2f2;}

.revize tr:hover {background-color: #ddd;}

.revize th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
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
