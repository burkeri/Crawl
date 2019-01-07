<template>
  <div id="app">
    <div id="nav">
      <br>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="register">Register</router-link> |
      <router-link to="login">Log In</router-link> |
      <router-link to="search">Search</router-link> |
      <router-link to="info">Info</router-link> |
      <router-link to="route">Route</router-link> |
      <router-link to="post">Add Review</router-link> |
      <router-link to="end">End</router-link> |-->
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
    } else if (
      this.$store.state.info.isUserLoggedIn === true &&
      this.$store.state.info.isCrawlActive === true
    ) {
      this.$router.push("route");
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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#linking {
  color: white;
  text-decoration: none;
}

#linking:hover {
  color: white;
  text-decoration: none;
  opacity: 0.5;
}

#out {
  color: white;
  text-decoration: none;
  opacity: 0.5;
}

#out:hover {
  color: white;
  text-decoration: none;
  opacity: 1;
  cursor: pointer;
}
</style>
