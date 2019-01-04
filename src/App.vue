<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="register">Register</router-link>|
      <router-link to="login">Log In</router-link>|
      <router-link to="search">Search</router-link>|
      <router-link to="info">Info</router-link>
      <router-link to="route">Route</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  beforeMount() {
    if (localStorage.getItem("info")) {
      try {
        let info = JSON.parse(localStorage.getItem("info"));
        this.$store.dispatch("setInfo", info);
      } catch (e) {
        localStorage.removeItem("info");
      }
    }
    if (
      this.$store.state.info.isUserLoggedIn === true &&
      this.$store.state.info.isCrawlActive === false
    ) {
      this.$router.push("search");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
