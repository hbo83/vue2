<template>
  <div class="crudPanel">
    <v-app>
      <v-content>
    <v-btn color="rgba(144,238,144, 0.5" active-class="your-class">
        <v-icon color="green" medium>add_box</v-icon>
      </v-btn>
    </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'CrudPanel',
  data () {
    return {
      greetings: 'hello'
    }
  }
}

</script>

<style scoped>
.crudPanel {
  border: 1px solid black;
  width: 3%;
  height: 200px;
  float: left;
}
.your-class {
  width: 600px;
}
</style>
