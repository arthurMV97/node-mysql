<template>
  <div>
      <form>
      <b-input-group prepend="Name" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
        <b-form-input
          id="inline-form-input"
          placeholder="Enter your name"
          type="text"
          class="mb-5 mr-sm-5 mb-sm-0"
          v-model="name"
          required
        ></b-form-input>
      </b-input-group>
      

      <b-input-group prepend="Email adress" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
        <b-form-input
         
          id="inline-form-input"
          placeholder="Enter email"
          type="email"
          class="mb-5 mr-sm-5 mb-sm-0"
         v-model="email"
          required
        ></b-form-input>
      </b-input-group>

  <b-button type="submit" variant="success" class="mt-4" @click="postContact">Add</b-button>

    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: 'AddContactForm',
data() {
    return {
        name: "",
        email: "",
        
    }
},
components: {
  
},
methods: {
   postContact() {
      let userId = this.$store.state.data.id
      let contactObj = {
          name: this.name,
          email: this.email,
          id_user_affiliate: userId
      }
    console.log(userId)

      axios.post("http://localhost:3000/add-new-contact", contactObj)


      this.$store.dispatch('pushNewContacts', contactObj )

      this.name = ""
      this.email = ""
  }

}
}
</script>

<style>

</style>