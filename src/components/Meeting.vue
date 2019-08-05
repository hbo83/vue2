<template>
<div>
  <!-- <h1>{{ msg }}</h1> -->
  <Header />
  <Nav />

  <div class="meeting">
    <table>
      <tr>
        <th>Téma schůze</th>
        <th>Vytvořeno</th>
        <th>Uskutečnění</th>
      </tr>
      <tr @click="selectRow(meeting)" v-for="meeting in meetings">
        <td>{{ meeting.theme }}</td>
        <td>{{ meeting.created }}</td>
        <td>{{ meeting.date }}</td>
      </tr>

    </table>

  </div>
  <v-btn fab width="80px" small color="info" to="/meeting/Meeting_New">
    <v-icon large>add</v-icon>
  </v-btn>
</div>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'

import axios from 'axios';
export default {
  name: 'Meeting',
  data() {
    return {
      meetings: []
    }
  },
  components: {
    Header,
    Nav

  },
  mounted() {
    console.log("Meeting mounted");
    this.userGlobal = localStorage.getItem("userLoged");
    console.log(this.userGlobal);

    var request = {
      params: {
        login: [this.userGlobal]
      },
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    }

    axios.get('http://localhost:8081/meetings', request)
      .then((response) => {
        console.log(response.data);
        console.log(this.msg);
        this.meetings = response.data;
        console.log(this.user);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    selectRow(meeting) {
      console.log(event.target.parentNode.parentNode.childNodes)
      // console.log(id)
      //po kliknutí na řádek s kontaktem, redirekt na EditContact s předáním parametrů kliknutého kontaktu. V komponentě EditContact jsou předaná data namountována do formuláře.
      this.$router.push({
        name: 'Meeting_Edit',
        params: meeting
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.meeting {
  width: 80%;
  height: 500px;
  /* border: 1px solid black; */
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  /* border-collapse: collapse; */
}

.meeting table {
  width: 100%;
  margin-left: 30px;
  border-collapse: collapse;
}

.meeting td,
.meeting th {
  border-bottom: 1px solid #ddd;
  padding: 8px;
  cursor: pointer;
}

.meeting tr:nth-child(even) {
  background-color: #f2f2f2;
}

.meeting tr:hover {
  background-color: #ddd;
}

.meeting th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #bb8897;
  color: white;
}
</style>
