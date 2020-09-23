<template>
  <div>
    <p id="error">{{msg}}</p>
      <form action="">
          <b-input-group prepend="Email adress" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
<b-form-input id="inline-form-input" placeholder="Enter email" type="email" class="mb-5 mr-sm-5 mb-sm-0" required v-model="emailValue"></b-form-input>
</b-input-group>

 <b-input-group prepend="Password" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
<b-form-input id="inline-form-input" placeholder="Enter your secret password" type="password" class="mb-5 mr-sm-5 mb-sm-0"  required v-model="passwordValue"></b-form-input>
</b-input-group>

 <b-button type="submit" variant="success" class="mt-4" @click="checkData">Submit</b-button>
      </form>
  </div>
</template>

<script>
import axios from 'axios';
// import Dashboard from './Dashboard'

export default {
name: 'SignInForm',
components: {
  // Dashboard
},
data() {
    return {
        msg: "",
        emailValue: "",
        passwordValue: ""
    }
},
methods: {
  checkData(evt) {
    evt.preventDefault();
    let that = this
    let dataToCheck = {
      email: this.emailValue,
      password: this.passwordValue
  }

    axios.post('http://localhost:3000/sign-in', dataToCheck)
          .then((res) => {
            console.log(res);
          this.$router.push('/dashboard')
          
        }).catch((err) => {
          that.msg = "Adresse email ou mot de passe invalide"
            console.log(err);
        });
  

}
}
}
</script>

<style>
#error {
  color: red;
}

</style>