<template>
      <div id="app">
  <b-jumbotron>
    <template v-slot:header>This is Dashboard page</template>

    <template v-slot:lead>
     Welcome to you, connected user ! 
    </template>

    <hr class="my-4">

<b-button type="submit" variant="danger" class="mt-4" @click="deleteToken">
  Sign Out
  </b-button>

  </b-jumbotron>
    </div>
</template>

<script>
export default {
name: 'Dashboard',
methods: {
  deleteToken() {
    this.$store.dispatch('DELETE_TOKEN')
    console.log(this.$router)
    this.$router.push('/')

  }
}
}
</script>

<style>

</style>