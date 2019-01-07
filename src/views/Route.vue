<template>
  <div>
    <div id="map-wrapper">
      <div id="map"></div>
    </div>
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
      <b-button @click="show">Modal</b-button>
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
    <b-modal ref="reviewModal" hide-footer hide-header class="b-modal">
      <div class="modal-content-container">
        <h3>You've Arrived!</h3>
        <div
          class="modal-image-container"
          v-bind:style="{backgroundImage: `url(${this.routeObj.places[this.nextLocationCounter].image})`}"
        ></div>
        <div>
          <h4>{{this.routeObj.places[this.nextLocationCounter].name}}</h4>
          <h4>{{this.routeObj.places[this.nextLocationCounter].address}}</h4>
          <p>Leave a Rating?</p>

          <star-rating
            v-model="this.routeObj.places[this.nextLocationCounter].rating"
            v-bind:star-size="50"
            v-bind:increment="1"
            v-bind:max-rating="5"
            v-bind:show-rating="false"
            active-color="#ffffff"
          >></star-rating>

          <br>
          <b-button class="modal-submit">Submit</b-button>
          <div>No Thanks...</div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import * as turf from "@turf/turf";
import VueTinySlider from "vue-tiny-slider";
import card from "@/components/card.vue";
import StarRating from "vue-star-rating";
export default {
  components: {
    "tiny-slider": VueTinySlider,
    StarRating: StarRating,
    card: card
  },
  data: function() {
    return {
      accessToken:
        "pk.eyJ1IjoidGhlbm9vZGxlbW9vc2UiLCJhIjoiY2pvdXM4c3ZrMWZnYTNrbW9ic2hmdjV6ZyJ9.-A735y9fU1TdsJ993uIKLA",
      nextLocationCounter: this.$store.state.info.crawlInfo.nextLocationCounter,
      routeObj: {
        center: {
          latitude: "28.561501",
          longitude: "-81.241322"
        },
        places: [
          {
            pid: "uhjtuSbP9XkJQq8nz--VpQ",
            name: "Uncle Maddio's Pizza - Orlando",
            address: "703 N Alafaya Trl",
            image:
              "https://s3-media2.fl.yelpcdn.com/bphoto/tzoZ1G3hK-VDwVPMjU39EA/o.jpg",
            city: "Orlando",
            region: "FL",
            price: 1,
            rating: "4.0",
            numberOfRatings: 77,
            longitude: -81.2061715,
            latitude: 28.5546892,
            searchedBefore: false,
            createdAt: "2019-01-05T19:02:42.000Z",
            updatedAt: "2019-01-05T19:02:42.000Z"
          },
          {
            pid: "ULU1v4LqU5LbRNnMXbWykg",
            name: "Blaze Fast-Fire'd Pizza",
            address: "4100 N Alafaya Trl",
            image:
              "https://s3-media4.fl.yelpcdn.com/bphoto/eD9-FtElFijRNy5mORUglQ/o.jpg",
            city: "Orlando",
            region: "FL",
            price: 1,
            rating: "4.5",
            numberOfRatings: 203,
            longitude: -81.208357,
            latitude: 28.599052,
            searchedBefore: false,
            createdAt: "2019-01-05T19:02:42.000Z",
            updatedAt: "2019-01-05T19:02:42.000Z"
          },
          {
            pid: "GFVxe4gtWZwlILWp1qPTLg",
            name: "Lazy Moon Pizza",
            address: "11551 University Blvd",
            image:
              "https://s3-media1.fl.yelpcdn.com/bphoto/NWJy_oDeHtYx3dvIepZYDA/o.jpg",
            city: "Orlando",
            region: "FL",
            price: 1,
            rating: "4.5",
            numberOfRatings: 529,
            longitude: -81.2194356507873,
            latitude: 28.5981983592022,
            searchedBefore: false,
            createdAt: "2019-01-05T19:02:42.000Z",
            updatedAt: "2019-01-05T19:02:42.000Z"
          },
          {
            pid: "rMdbNLK_JD13_5UkWtNP4g",
            name: "Muzzarella Pizza and Italian Kitchen",
            address: "7780 Lake Underhill Rd",
            image:
              "https://s3-media1.fl.yelpcdn.com/bphoto/pAflCK_H4aSi7e96a8N8TQ/o.jpg",
            city: "Orlando",
            region: "FL",
            price: 1,
            rating: "4.5",
            numberOfRatings: 66,
            longitude: -81.28142,
            latitude: 28.53873,
            searchedBefore: false,
            createdAt: "2019-01-05T19:02:42.000Z",
            updatedAt: "2019-01-05T19:02:42.000Z"
          },
          {
            pid: "BERHdYECP9p1axoc3QXcBQ",
            name: "Mario's Pizza",
            address: "7213 Curryford Rd",
            image:
              "https://s3-media4.fl.yelpcdn.com/bphoto/58-Zyxoo2B7BJf9ShbY0lQ/o.jpg",
            city: "Orlando",
            region: "FL",
            price: 1,
            rating: "4.0",
            numberOfRatings: 106,
            longitude: -81.29118,
            latitude: 28.51681,
            searchedBefore: false,
            createdAt: "2019-01-05T19:02:42.000Z",
            updatedAt: "2019-01-05T19:02:42.000Z"
          }
        ]
      },

      crawlInfo: this.$store.state.info.crawlInfo
    };
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
    },
    map: function() {
      mapboxgl.accessToken = this.accessToken; // optional

      return new mapboxgl.Map({
        container: "map",
        center: [this.routeObj.center.longitude, this.routeObj.center.latitude],
        zoom: 11.5,

        style: "mapbox://styles/mapbox/streets-v9"
      });
    },
    getLocation: function() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(this.receivedPos, this.error);
      } else {
        this.error = "Geolocation is not supported by this browser.";
      }
    },
    receivedPos: function(position) {
      let data = this.routeObj.places;
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
          var onRoute = document.getElementById("on-route");
          onRoute.style.display = "none";
          var arr = document.getElementById("arrived");
          arr.style.display = "block";
        }
      } else {
        if (this.crawlInfo.visitStage === 1) {
          console.log(`You left`);
          this.crawlInfo.visitStage = 0;
          this.crawlInfo.nextLocationCounter++;
          var onRoute = document.getElementById("on-route");
          onRoute.style.display = "block";
          var arr = document.getElementById("arrived");
          arr.style.display = "none";
          if (
            this.crawlInfo.nextLocationCounter === this.routeObj.places.length
          ) {
            this.$router.push("end");
          }
          this.$store.dispatch("setCrawlInfo", this.crawlInfo);
        } else {
          console.log("You are not there yet");
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
  },
  mounted() {
    let map = this.map();
    let lineCoordinates = [];
    let data = this.routeObj.places;

    for (let place of data) {
      lineCoordinates.push([place.longitude, place.latitude]);
    }

    // function getLocation() {}
    // function success(position) {}
    // function error(error) {}

    this.getLocation();

    let geoJsonLine = {
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: lineCoordinates
          }
        }
      },
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
      paint: {
        "line-color": "#fd593f",
        "line-width": 4,
        "line-dasharray": [1, 2]
      }
    };

    map.on("load", function() {
      let markerNumber = 1;
      for (let place of data) {
        const el = document.createElement("div");
        el.textContent = markerNumber;
        el.className = "marker";

        new mapboxgl.Marker(el)
          .setLngLat([place.longitude, place.latitude])
          .addTo(map);
        markerNumber++;
      }
      map.addLayer(geoJsonLine);
    });
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
  font-size: 40px;
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

#map {
  width: 100%;
  height: 100%;
}

#map-wrapper {
  position: fixed;
  z-index: -100;
  top: 0;
  height: 100vh;
  width: 100vw;
  text-align: left;
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

/* #start-route {
  display: none;
} */

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
