<template>
  <div id="app">
    <b-jumbotron>
      <template v-slot:header>Connexion interface</template>

      <template v-slot:lead>
        Below The formulary for signUp or signIn in our magnificient application
        !
      </template>

      <hr class="my-4" />
      <FormHandler></FormHandler>
    </b-jumbotron>
  </div>
</template>

<script>
import FormHandler from "./FormHandler";

export default {
  name: "Home",
  components: {
    FormHandler,
  },
  props: {},
};
</script>

<style scoped>
#app {
  margin: 0 auto;
}
</style>