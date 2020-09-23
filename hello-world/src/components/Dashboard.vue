<template>
      <div id="app">
  <b-jumbotron>
    <template v-slot:header>This is Dashboard page</template>

    <template v-slot:lead>
     Welcome to you, connected user ! 
    </template>

    <hr class="my-4">


  </b-jumbotron>
    </div>
</template>

<script>
export default {
name: 'Dashboard',
}
</script>

<style>

</style>