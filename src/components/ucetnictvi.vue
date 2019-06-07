<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <Header />
    <Nav />

    <div class="ucetnictvi">
      <table>
    <tr>
      <th>ucto</th>
      <th>ucto</th>
      <th>ucto</th>
    </tr>
    <tr v-for="meeting in meetings">
      <td>{{ meeting.theme }}</td>
      <td>{{ meeting.created }}</td>
      <td>{{ meeting.date }}</td>
    </tr>

  </table>
  <ModalMeetings />
    </div>
  </div>

</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
import ModalMeetings from './ModalMeetings.vue'
import axios from 'axios';
export default {
  name: 'Ucetnictvi',
  data () {
    return {
      meetings: []
    }
  },
  components: {
    Header,
    Nav,
    ModalMeetings
  },
    mounted() {
        axios.get('http://localhost:8081/meetings')
        .then((response) => {
          console.log(response.data);
          this.meetings = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ucetnictvi {
  width: 80%;
  height: 500px;
  border: 1px solid black;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}

.ucetnictvi table {
  width: 100%;
}
.ucetnictvi td, .ucetnictvi th {
  border: 1px solid #ddd;
  padding: 8px;
}

.ucetnictvi tr:nth-child(even){background-color: #f2f2f2;}

.ucetnictvi tr:hover {background-color: #ddd;}

.ucetnictvi th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
