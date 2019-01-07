<template>
  <div id="out" @click="logout">Log Out</div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$store.dispatch("setRouteObj", null);
      this.$store.dispatch("setCrawlInfo", null);

      this.$router.push("/");
    }
  }
};
</script>
