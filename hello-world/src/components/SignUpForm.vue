<template>
<div>
 <form>
     <b-input-group prepend="Name" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
<b-form-input id="inline-form-input" placeholder="Enter your name" type="text" class="mb-5 mr-sm-5 mb-sm-0" v-model="nameValue" required></b-form-input>
</b-input-group>

 <b-input-group prepend="Email adress" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
<b-form-input id="inline-form-input" placeholder="Enter email" type="email" class="mb-5 mr-sm-5 mb-sm-0" v-model="emailValue" required></b-form-input>
</b-input-group>

 <b-input-group prepend="Password" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
<b-form-input id="inline-form-input" placeholder="Enter your secret password" type="password" class="mb-5 mr-sm-5 mb-sm-0" v-model="passwordValue"  required></b-form-input>
</b-input-group>

 <b-button type="submit" variant="success" class="mt-4" @click="postData">Submit</b-button>

 </form>

 </div>
</template>

<script>
import axios from 'axios';

export default {
name: 'SignUpForm',
data() {
    return {
        nameValue: "",
        emailValue: "",
        passwordValue: ""
    }
},
methods: {
    async postData() {
        let dataToPost = {
            name: this.nameValue,
            email: this.emailValue,
            password: this.passwordValue
        }
        console.Log(dataToPost)
        await axios.post('http://localhost:8000/sign-up', dataToPost)
  
    }
}
}
</script>

<style>

</style>