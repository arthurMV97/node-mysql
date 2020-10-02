<template>
  <div>
      <div class="contact" v-for="e in contactsFct" :key="e.id">
      <p>Name: {{e.name}}</p>
      <p>Email: {{e.email}}</p>
  </div>
  </div>
</template>
  
<script>

export default {
name: 'ContactList',
components: {
  
},
methods: {
   
},
computed: {
    contactsFct() {
        return this.$store.state.contacts
    }
}
}
</script>

<style>
.contact {
    border: solid black 1px;
    display: flex;
    justify-content: space-around;
    margin: 10px 300px;
}

.contact p {
    margin-top: 12px;
}
</style>