<template>
  <div>
    <h1>Login</h1>
    <input type="email" name="email" placeholder="email" v-model="email">
    <br>
    <input type="password" name="password" placeholder="password" v-model="password">
    <br>
    <div class="error" v-html="error"/>
    <br>
    <button v-if="!$store.state.isUserLoggedIn" @click="login">Log In</button>
    <button v-else @click="logout">Log Out</button>
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
</style>
