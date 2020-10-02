<template>
      <div id="app">
  <ConnectedHeader />
  <b-jumbotron>
    <template v-slot:header>This is Dashboard page</template>

    <template v-slot:lead>
     Welcome to you, connected user ! 

    </template>

    <hr class="my-4">
  <b-tabs content-class="mt-3">
    <b-tab title="Contacts List" active><ContactList /></b-tab>
    <b-tab title="Add New Contact"><AddContactForm /></b-tab>
  </b-tabs>
  </b-jumbotron>
    </div>
</template>

<script>
import ConnectedHeader from "./ConnectedHeader";
import AddContactForm from "./AddContactForm";
import ContactList from "./ContactList";



export default {
name: 'Dashboard',
components: {
  ConnectedHeader,
  AddContactForm,
  ContactList
},
methods: {
  
}
}
</script>

<style>

</style>