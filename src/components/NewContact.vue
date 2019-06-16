<template>
  <div>
  <Header />
  <Nav />

  <div class="newContact">
    <v-app>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</v-app>
  </div>
</div>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'

export default {
  name: 'NewContact',
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
  },
  mounted() {
    console.log(789)
  },
  components: {
    Header,
    Nav
  }
}

</script>
<style scoped>
.newContact {
  width: 60%;
  margin-left: 20%;
}

</style>
