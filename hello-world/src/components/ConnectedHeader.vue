<template>
  <div id="header">
    <ul id="header-ul">
      <li><p class="elements">Dashboard</p></li>
      <li><p class="elements">{{$store.state.data.name}}</p>
</li>
      <li> <b-button type="submit" variant="danger" class="mt-4 elements" @click="deleteToken">
  Sign Out
  </b-button></li>

    </ul>
      
     
  </div>
</template>

<script>
export default {
name: 'ConnectedHeader',
methods: {
    deleteToken() {
    this.$store.dispatch('DELETE_TOKEN')
    this.$store.dispatch('REMOVE_CONTACTLIST')
    console.log(this.$router)
    this.$router.push('/')


  }
},

}
</script>

<style>
#header {
  background-color: darkblue;
  
}

#header-ul {
 display: flex;
  flex-direction: row;
  justify-content: space-between;
   margin: 0;

}

li {
   list-style: none;
}

li p {
  margin-top: 5px;
}

.elements {
  margin: 30px;
  color: white;
 

}


</style>