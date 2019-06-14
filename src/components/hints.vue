<template>
  <div>
  <Header />
  <Nav />
  <div class="exPanelWrapper">
  <v-expansion-panel >
    <v-expansion-panel-content
      v-for="item in items"
      :key="item.name"
    >
      <template v-slot:header>
        <div><b>{{item.name}}</b></div>
      </template>
      <v-card>
        <v-card-text>{{ item. content }}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</div>
</div>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
import ModalMeetings from './ModalMeetings.vue'
import axios from 'axios';
export default {
  name: 'Hints',
  data () {
    return {
      items: [
        { name: "Založení SVJ", content: "lerefsdfgvs"},
        { name: "Svolání domovní schůze", content: "Svolání schůze se musí konat alespoň jedenkrát ročně. Svolavatelem je "},
        { name: "Povinnosti předsedy", content: "lerefsdfgvs"},
        { name: "Revize", content: "lerefsdfgvs"},
        { name: "Orgány společenství", content: "lerefsdfgvs"}
      ]
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
          console.log(this.msg);
          this.meetings = response.data;
          console.log(this.user);
        })
        .catch((error) => {
          console.log(error);
        });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.exPanelWrapper {
  width: 85%;
  float: left
}
</style>
