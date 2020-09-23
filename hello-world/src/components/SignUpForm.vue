<template>
<div>
    <p id="message">{{msg}}</p>
 <form>
     <b-input-group prepend="Name" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
<b-form-input id="inline-form-input" placeholder="Enter your name" type="text" class="mb-5 mr-sm-5 mb-sm-0" v-model="form.name" required></b-form-input>
</b-input-group>

 <b-input-group prepend="Email adress" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
<b-form-input id="inline-form-input" placeholder="Enter email" type="email" class="mb-5 mr-sm-5 mb-sm-0" v-model="form.email" required></b-form-input>
</b-input-group>

 <b-input-group prepend="Password" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
<b-form-input id="inline-form-input" placeholder="Enter your secret password" type="password" class="mb-5 mr-sm-5 mb-sm-0" v-model="form.password"  required></b-form-input>
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
    msg: "",
    form: {
        name: "",
        email: "",
        password: ""
        }
    }
},
methods: {
    postData(evt) {
        let that = this
        evt.preventDefault();
        let dataToPost = {
            name: this.form.name,
            email: this.form.email,
            password: this.form.password
        }
        console.log(dataToPost)
        axios.post('http://localhost:3000/sign-up', this.form).then((res) => {
            console.log(res);
            that.msg = "You have been registed. Go Sign In now!"

        }).catch((err) => {
            console.log(err);
        })
    this.form.name = "";
    this.form.email = "";
    this.form.password = "";
    
    }
}
}
</script>

<style>
#message {
    color:green ;
}
</style>

