<template>
  <div class="crudPanel">
    <v-btn>
        <v-icon color="green" medium>add_box</v-icon>
      </v-btn>
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
</style>
