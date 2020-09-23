<template>
  <div>
  <b-tabs content-class="mt-3">
    <b-tab title="Sign Up" active><SignUpForm></SignUpForm></b-tab>
    <b-tab title="Sign In"><SignInForm></SignInForm></b-tab>
  
  </b-tabs>
</div>
</template>

<script>
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
export default {
  name: 'FormHandler',
  components: {
    SignUpForm,
    SignInForm
  },
  props: {
    
  }
}
</script>

<style>

</style>