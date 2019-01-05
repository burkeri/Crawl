<template>
  <div>
    <!-- Background Image-->
    <div id="background-img">
      <img src="../assets/food-resize.jpg">
    </div>

    <!-- Title -->
    <h1>Sign Up</h1>

    <!-- Register Form -->
    <form name="tastetour" autocomplete="off">
      <b-form-input type="email" name="email" placeholder="email" v-model="email"/>
      <br>
      <b-form-input type="password" name="password" placeholder="password" v-model="password"/>
      <br>
      <b-form-input type="text" name="username" placeholder="username" v-model="username"/>
    </form>
    <br>
    <div class="error" v-html="error"/>
    <br>

    <b-button size="lg" id="reg" v-if="!$store.state.isUserLoggedIn" @click="register">
      <router-link id="linking" to="search">Register</router-link>
    </b-button>
    <b-button size="lg" id="out" v-else @click="logout">Log Out</b-button>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          username: this.username
        });

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);

        this.email = "";
        this.password = "";
        this.username = "";
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
      this.username = "";
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

#reg {
  background-color: #fd593f;
  border: none;
  font-family: "Poppins";
}

#reg:hover {
  opacity: 0.5;
}

#reg:focus {
  outline: none;
}

#out:focus {
  outline: none;
}
</style>
