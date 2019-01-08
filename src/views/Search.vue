<template>
  <div>

    <!-- Overlay -->
    <div id="black"></div>

    <!-- Background Image-->
    <div id="background-img">
      <img src="../assets/food2-resize.jpg">
    </div>

    <!-- Search Form -->
    <h3>Pick Your City</h3>
    <b-form-input
      id="city"
      type="text"
      name="city"
      autocomplete="off"
      placeholder="New York"
      v-model="city"
    />
    <img id="cutlery" src="../assets/cutlery.png">
    <b-form-input
      id="food"
      type="text"
      name="food"
      autocomplete="off"
      placeholder="Pick Your Food"
      v-model="food"
    />

    <!-- Price Select -->
    <h3 id="price">Price</h3>

    <b-form-radio-group
      buttons
      id="brand"
      size="lg"
      name="ds"
      :options="options"
      v-model="checkedPrice"
    ></b-form-radio-group>

    <!-- Search button -->
    <router-link id="linking" to="route">
      <b-button @click="search" id="search">Search</b-button>
    </router-link>

    <!-- Login -->
    <LogOut></LogOut>
  </div>
</template>

<script>
import SearchService from "../services/SearchService";
import LogOut from "@/components/LogOut.vue";

export default {
  components: {
    LogOut: LogOut
  },

  data: function() {
    return {
      city: "",
      food: "",
      checkedPrice: "",
      options: [
        { text: "$", value: "1" },
        { text: "$$", value: "2" },
        { text: "$$$", value: "3" }
      ]
    };
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(position => {
      this.$store.dispatch("setUserPosition", {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
  },
  beforeMount() {
    this.$store.dispatch("setRouteObj", null);
    this.$store.dispatch("setCrawlInfo", null);
  },
  methods: {
    async search() {
      try {
        const search = await SearchService.search({
          location: this.city.toLowerCase().trim(),
          query: this.food.toLowerCase().trim(),
          price: this.checkedPrice,
          userPosition: this.$store.state.info.userPosition
        });
        const routeObj = {
          center: search.data.center,
          places: search.data.places
        };

        const savedToStore = await this.$store.dispatch(
          "setRouteObj",
          routeObj
        );

        this.location = "";
        this.food = "";
        if (savedToStore) {
          this.$router.push("route");
        }
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>


<style scoped>
div {
  font-family: "Poppins";
}

#black {
  position: fixed;
  z-index: -50;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  transform: translateX(calc((100% - 100vw) / 2));
  background-color: rgb(0, 0, 0, 0.5);
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

h3 {
  color: white;
  font-weight: 700;
  font-size: 100%;
  margin-bottom: 10%;
}

.form-control {
  margin: 0 auto;
}

#city {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10%;
  background-color: transparent;
  color: white;
  text-align: center;
  font-size: 450%;
  height: auto;
  font-weight: 800;
  border: none;
  box-shadow: none;
  caret-color: #fd593f;
}

#city::placeholder {
  color: white;
  opacity: 0.5;
}

#food {
  width: 75%;
  margin: 0 auto;
  background-color: transparent;
  color: white;
  font-size: 200%;
  height: auto;
  border: none;
  box-shadow: none;
  caret-color: #fd593f;
  border-bottom: white 3px dotted;
  display: inline-block;
}

#food::placeholder {
  color: white;
  opacity: 0.5;
}

#cutlery {
  display: inline-block;
  width: 10%;
}

#price {
  margin-top: 10%;
}

#brand {
  width: 75%;
}

#search {
  display: block;
  background-color: #fd593f;
  margin: 0 auto;
  border: none;
  margin-top: 10%;
  margin-bottom: 5%;
}
</style>

<style>
label.btn {
  background-color: #fd593f;
  border: none;
  opacity: 0.5;
}
label.btn:hover,
label.btn:active,
label.btn:visited {
  background-color: #fd593f !important;
  opacity: 1;
}
.btn-secondary:not(:disabled):not(.disabled).active {
  background-color: #fd593f !important;
  opacity: 1;
}
</style>