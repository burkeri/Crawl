<template>
  <div>
    <!-- Background Image-->
    <div id="background-img">
      <img src="../assets/food-resize.jpg">
    </div>

    <!-- Title -->
    <h1>Sign In</h1>

    <!-- Login Form -->
    <img id="cutlery" src="../assets/cutlery.png">
    <b-form-input id="signin" type="email" name="email" placeholder="email" v-model="email"/>
    <br>
    <img id="cutlery" src="../assets/cutlery.png">
    <b-form-input id="signin" type="password" name="password" placeholder="password" v-model="password"/>
    <br>
    <div class="error" v-html="error"/>
    <br>

    <b-button size="lg" id="log" v-if="!$store.state.isUserLoggedIn" @click="login">
      <router-link id="linking" to="search">Log In</router-link>
    </b-button>
    <b-button id="out" v-else @click="logout">Log Out</b-button>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);

        this.email = "";
        this.password = "";

        this.$router.push("search");
      } catch (error) {
        this.error = error.response.data.error;
      }
    },

    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);

      this.email = "";
      this.password = "";
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}

h1 {
  font-family: "Poppins";
  font-weight: 700;
  font-size: 500%;
  color: white;
  margin-top: 5%;
  margin-bottom: 10%;
}

#background-img {
  position: fixed;
  z-index: -100;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  transform: translateX(calc((100% - 100vw) / 2));
  filter: blur(7px);
}

.form-control {
  width: 75%;
  margin: 0 auto;
  font-family: "Poppins";
}

#log {
  background-color: #fd593f;
  border: none;
  font-family: "Poppins";
}

#log:hover {
  opacity: 0.5;
}

#log:focus {
  outline: none;
}

#out:focus {
  outline: none;
}

#cutlery {
  display: inline-block;
  width: 10%;
}

#signin {
  width: 75%;
  margin: 0 auto;
  background-color: transparent;
  color: white;
  font-size: 120%;
  height: auto;
  border: none;
  box-shadow: none;
  caret-color: #fd593f;
  border-bottom: white 3px dotted;
  display: inline-block;
  margin-bottom: 15%;
  margin-top: 10%;
}

#signin::placeholder {
  color: white;
  opacity: 0.5;
}
</style>
