<template>
  <div>
    <Map></Map>
    <div id="start-route">
      <b-button id="start" v-on:click="startOnRoute">
        <img id="cutlery" src="../assets/cutlery.png">
        Start
      </b-button>
      <div id="back-button">
        <router-link id="back" to="search">
          <i class="material-icons">arrow_left</i>
          Back
        </router-link>
      </div>
      <tiny-slider :mouse-drag="true" :loop="false" items="1">
        <!-- <div v-for="place in routeObj.places" :key="place.pid">
            <img :src="place.image" alt>
        </div>-->
        <card
          v-for="place in routeObj.places"
          :number="routeObj.places.indexOf(place)"
          :place="place"
          :key="place.pid"
        ></card>
      </tiny-slider>
    </div>
    <div id="on-route">
      <br>
      <b-card id="end-card"></b-card>
      <h2>
        En Route
        <img id="cutlery" src="../assets/cutlery2.png">
        <router-link to="end">
          <b-button id="end-route">End</b-button>
        </router-link>
      </h2>
    </div>
    <div id="arrived">
      <h1>You've Arrived</h1>
      <div id="blur"></div>
    </div>
    <Modal :key="key"></Modal>
  </div>
</template>

<script>
import * as turf from "@turf/turf";
import VueTinySlider from "vue-tiny-slider";
import card from "@/components/card.vue";
import Modal from "@/components/Modal.vue";
import Map from "@/components/Map.vue";
import store from "@/store.js";
export default {
  components: {
    "tiny-slider": VueTinySlider,
    card: card,
    Modal: Modal,
    Map: Map
  },
  mounted() {
    this.$forceUpdate();
  },
  data: function() {
    return {
      nextLocationCounter: this.$store.state.info.crawlInfo.nextLocationCounter,
      key: 0,
      // rating: 3,
      info: store.state.info,
      routeObj: store.state.info.routeObj,

      crawlInfo: store.state.info.crawlInfo
    };
  },
  computed: {
    storeInfo() {
      return store.state.info;
    }
  },

  methods: {
    show: function() {
      this.$refs.reviewModal.show();
    },

    startOnRoute: function() {
      var onRoute = document.getElementById("on-route");
      var startRoute = document.getElementById("start-route");
      startRoute.style.display = "none";
      onRoute.style.display = "block";
      this.getLocation();
    },

    getLocation: function() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(this.receivedPos, this.error);
      } else {
        this.error = "Geolocation is not supported by this browser.";
      }
    },
    receivedPos: function(position) {
      let data = this.info.routeObj.places;
      let nextLocation = data[this.crawlInfo.nextLocationCounter];
      let crd = position.coords;
      let crdLngLat = turf.point([crd.longitude, crd.latitude]);
      let nextLocationLngLat = turf.point([
        nextLocation.longitude,
        nextLocation.latitude
      ]);
      let radius = 0.25;
      let circleOptions = {
        units: "miles"
      };

      // console.log(radius);
      const circle = turf.circle(nextLocationLngLat, radius, circleOptions);

      if (turf.booleanPointInPolygon(crdLngLat, circle)) {
        if (this.crawlInfo.visitStage === 0) {
          console.log(`You've made it!`);
          this.crawlInfo.visitStage = 1;
          this.$store.dispatch("setCrawlInfo", this.crawlInfo);
          this.$refs.reviewModal.show();
        }
      }
    },
    posError: function(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          this.error = "User denied the request for Geolocation.";
          break;
        case error.POSITION_UNAVAILABLE:
          this.error = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          this.error = "The request to get user location timed out.";
          break;
        case error.UNKNOWN_ERROR:
          this.error = "An unknown error occurred.";
          break;
      }
    }
  }
};
</script>
<style>
.modal-content {
  background-color: rgba(253, 89, 63, 0.75) !important;
}
.vue-star-rating {
  justify-content: center;
}
</style>


<style scoped>
div {
  font-family: "Poppins";
}

.no-thanks {
  text-align: right;
  font-size: 12px;
}

.modal-content-container {
  color: white;
}

.modal-image-container {
  width: 80%;
  height: 200px;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
}

.modal-submit {
  border: none;
  background-color: white;
  color: #fd593f;
}

#back-button {
  text-align: left;
  position: fixed;
  top: 10%;
}

#back {
  display: inline-flex;
  vertical-align: middle;
  font-size: 18px;
  color: #fd593f;
  opacity: 0.5;
  text-decoration: none;
  margin-left: 5%;
}

#back:hover {
  opacity: 1;
}

.material-icons {
  font-size: 27px;
}

#cutlery {
  width: 10%;
  margin-right: 5%;
  display: inline;
}

#start {
  background-color: #fd593f;
  margin: 0 auto;
  text-align: center;
  border: none;
  font-weight: 700;
  font-size: 100%;
  display: block;
  position: fixed;
}

#start:hover {
  opacity: 0.5;
}

h2 {
  font-weight: 700;
  color: #fd593f;
}

#blur {
  position: fixed;
  z-index: -50;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  transform: translateX(calc((100% - 100vw) / 2));
  filter: blur(10px);
  background-color: #fd593f;
  opacity: 0.8;
}

h1 {
  font-size: 500%;
  color: white;
  font-weight: 700;
  margin-top: 35%;
}

#on-route {
  display: none;
}

#arrived {
  display: none;
}
</style>

<style>
.marker {
  color: white;
  background-color: #fd593f;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 3px 0 0 8px;
  font-size: 1rem;
  transition: width 1s;
  transition: height 1s;
}

.marker:hover {
  cursor: pointer;
}

.marker:active {
  width: 35px;
  height: 35px;
}

#end-route {
  background-color: #fd593f;
  border: none;
  opacity: 1;
}

#end-route:hover {
  background-color: #fd593f;
  opacity: 0.5;
}

#end-card {
  border: none;
  position: fixed;
  z-index: -10;
  width: 100%;
  filter: blur(10px);
}

#next-card {
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 80px;
  border: none;
  background-color: rgba(253, 89, 63, 0.75);
  color: white;
}

#cutlery2 {
  width: 20%;
}
</style>