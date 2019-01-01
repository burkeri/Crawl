<template>
  <div>
    <h1>Register</h1>
    <form name="tastetour" autocomplete="off">
      <input type="email" name="email" placeholder="email" v-model="email">
      <br>
      <input type="password" name="password" placeholder="password" v-model="password">
      <br>
      <input type="text" name="username" placeholder="username" v-model="username">
    </form>
    <br>
    <div class="error" v-html="error"/>
    <br>
    <button v-if="!$store.state.isUserLoggedIn" @click="register">Register</button>
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
</style>
