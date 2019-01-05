<template>
  <div id="map-wrapper">
    <div id="map"></div>
    <tiny-slider :mouse-drag="true" :loop="false" items="2" gutter="20">
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
</template>

<script>
import mapboxgl from "mapbox-gl";
import * as turf from "@turf/turf";
import VueTinySlider from "vue-tiny-slider";
import card from "@/components/card.vue";
export default {
  components: {
    "tiny-slider": VueTinySlider,
    card: card
  },
  data: function() {
    return {
      accessToken:
        "pk.eyJ1IjoidGhlbm9vZGxlbW9vc2UiLCJhIjoiY2pvdXM4c3ZrMWZnYTNrbW9ic2hmdjV6ZyJ9.-A735y9fU1TdsJ993uIKLA",
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
        }
      } else {
        if (this.crawlInfo.visitStage === 1) {
          console.log(`You left`);
          this.crawlInfo.visitStage = 0;
          this.crawlInfo.nextLocationCounter++;
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
#map {
  margin: 0 auto;
  width: 500px;
  height: 500px;
}

#map-wrapper {
  text-align: left;
}

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
</style>
