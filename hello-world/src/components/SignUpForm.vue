<template>
  <div>
    <p id="message2">{{ msg2 }}</p>
    <p id="message">{{ msg }}</p>
    <form>
      <b-input-group prepend="Name" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
        <b-form-input
          :state="changeState('name')"
          id="inline-form-input"
          placeholder="Enter your name"
          type="text"
          class="mb-5 mr-sm-5 mb-sm-0"
          v-model="form.name"
          required
        ></b-form-input>
      </b-input-group>
      <div class="error" v-if="!$v.form.name.required">
        Veuillez renseigner votre nom
      </div>

      <b-input-group prepend="Email adress" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
        <b-form-input
          :state="changeState('email')"
          id="inline-form-input"
          placeholder="Enter email"
          type="email"
          class="mb-5 mr-sm-5 mb-sm-0"
          v-model="form.email"
          required
        ></b-form-input>
      </b-input-group>
      <div class="error" v-if="!$v.form.email.required">
        Veuillez renseigner votre email
      </div>
      <div class="error" v-if="!$v.form.email.email">
        Veuillez renseigner un email valide
      </div>

      <b-input-group prepend="Password" class="mb-2 mr-sm-2 mb-sm-0 mt-4">
        <b-form-input
          :state="changeState('password')"
          id="inline-form-input"
          placeholder="Enter your secret password"
          type="password"
          class="mb-5 mr-sm-5 mb-sm-0"
          v-model="form.password"
          required
        ></b-form-input>
      </b-input-group>
      <div class="error" v-if="!$v.form.password.required">
        Veuillez renseigner un mot de passe
      </div>
      <div class="error" v-if="!$v.form.password.minLength">
        Votre mot de passe doit faire au moins 8 caractères
      </div>

      <b-button type="submit" variant="success" class="mt-4" @click="postData"
        >Submit</b-button
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "SignUpForm",
  data() {
    return {
      msg: "",
      msg2: "",
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        email,
        required,
      },
      password: {
        minLength: minLength(8),
        required,
      },
    },
  },

  methods: {
    changeState(element) {
      if (
        !this.$v.form[element].required |
        !this.$v.form.email.email |
        !this.$v.form.password.minLength
      ) {
        return false;
      } else {
        return null;
      }
    },
    postData(evt) {
      let that = this;
      evt.preventDefault();
      let dataToPost = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
      };
      console.log(dataToPost);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.msg = "Champs invalides";
      } else {
        axios
          .post("http://localhost:3000/sign-up", this.form)
          .then((res) => {
            console.log(res);
            that.msg2 = "You have been registed. Go Sign In now!";
          })
          .catch((err) => {
            console.log(err);
          });
        this.form.name = "";
        this.form.email = "";
        this.form.password = "";
      }
    },
  },
};
</script>

<style>
#message {
  color: red;
}

#message2 {
  color: green;
}

.error {
  color: red;
  font-size: 10px;
  text-align: left;
  margin-top: 5px;
  /* margin-left: 100px; */
}
</style>

