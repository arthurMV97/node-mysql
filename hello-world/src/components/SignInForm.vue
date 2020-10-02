<template>
  <div>
    <p id="error">{{ msg }}</p>
    <form>
      <b-input-group prepend="Email adress" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
        <b-form-input
          :state="changeState('email')"
          id="inline-form-input"
          placeholder="Enter email"
          type="email"
          class="mb-5 mr-sm-5 mb-sm-0"
          required
          v-model="email"
        ></b-form-input>
      </b-input-group>
      <div class="error" v-if="!$v.email.required">
        Veuillez renseigner votre email
      </div>
      <div class="error" v-if="!$v.email.email">
        Veuillez renseigner un email valide
      </div>

      <b-input-group prepend="Password" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
        <b-form-input
          :state="changeState('password')"
          id="inline-form-input"
          placeholder="Enter your secret password"
          type="password"
          class="mb-5 mr-sm-5 mb-sm-0"
          required
          v-model="password"
        ></b-form-input>
      </b-input-group>
      <div class="error" v-if="!$v.password.required">
        Veuillez renseigner un mot de passe
      </div>
      <div class="error" v-if="!$v.password.minLength">
        Votre mot de passe doit faire au moins 8 caractères
      </div>

      <b-button type="submit" variant="success" class="mt-4" @click="runFct"
        >Submit</b-button
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { required, minLength, email } from "vuelidate/lib/validators";
import jwt from "jsonwebtoken"


export default {
  name: "SignInForm",
  components: {
  },
  data() {
    return {
      msg: "",
      email: "",
      password: "",
    };
  },
  validations: {
    email: {
      email,
      required,
    },
    password: {
      minLength: minLength(8),
      required,
    },
  },
  methods: {
    changeState(element) {
      if (
        !this.$v[element].required |
        !this.$v.email.email |
        !this.$v.password.minLength
      ) {
        return false;
      } else {
        return null;
      }
    },

    checkData() {
      // evt.preventDefault();
      let that = this;
      let dataToCheck = {
        email: this.email,
        password: this.password,
      };

      axios
        .post("http://localhost:3000/sign-in", dataToCheck)
        .then((res) => {
          if (res.data.auth) {
            let token = res.data.token;
            let decoded = jwt.decode(token)
            console.log("token", token)
           console.log("decode", decoded)
            console.log("signin", res);
            this.$store.dispatch("getData", decoded);
            this.$store.dispatch("getToken", token);
            this.getContacts()
            this.$router.push("/dashboard");
          }
        })
        .catch((err) => {
          that.msg = "Adresse email ou mot de passe invalide";
          console.log(err);
        });
    },
     async getContacts() {
       console.log(this.$store.state.data.id)
    let contacts = await axios.get(`http://localhost:3000/get-contacts/${this.$store.state.data.id}`);
    this.$store.dispatch('storeContacts', contacts.data )
    console.log(contacts.data)
    },
    async runFct() {
      await this.checkData()
      // await this.getContacts()
      
      
      
    }
  },
};
</script>

<style>
#error {
  color: red;
}
</style>