<template>
  <div>
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

export default {
name: 'SignInForm',
methods: {
  async checkData() {
    let dataToCheck = {
      email: this.emailValue,
      password: this.passwordValue
  }

    await axios.post('http://localhost:8000/sign-in', dataToCheck);
  

}
}
}
</script>

<style>

</style>