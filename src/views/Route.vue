<template>
  <div id="map-wrapper">
    <input type="text" v-model="radius">
    
    <button @click="getLocation">Check</button>
    <p>{{nextLocation}}</p>
    <p>{{msg}}</p>

    <div id="map"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import * as turf from "@turf/turf";

export default {
  data() {
    return {

      radius: "10",
      nextLocation: "Default",
      msg: "Default message",

      accessToken:
        "pk.eyJ1IjoidGhlbm9vZGxlbW9vc2UiLCJhIjoiY2pvdXM4c3ZrMWZnYTNrbW9ic2hmdjV6ZyJ9.-A735y9fU1TdsJ993uIKLA",
      routeObj: {
        center: {
          latitude: "28.542484",
          longitude: "-81.326371"
        },
        places: [
          {
            pid: "BERHdYECP9p1axoc3QXcBQ",
            name: "Mario's Pizza",
            address: "7213 Curryford Rd",
            city: "Orlando",
            region: "FL",
            price: 1,
            rating: "4.0",
            numberOfRatings: 106,
            longitude: -81.29118,
            latitude: 28.51681,
            searchedBefore: false,
            createdAt: "2019-01-03T04:18:08.000Z",
            updatedAt: "2019-01-03T04:18:08.000Z"
          },
          {
            pid: "rMdbNLK_JD13_5UkWtNP4g",
            name: "Muzzarella Pizza and Italian Kitchen",
            address: "7780 Lake Underhill Rd",
            city: "Orlando",
            region: "FL",
            price: 1,
            rating: "4.5",
            numberOfRatings: 64,
            longitude: -81.28142,
            latitude: 28.53873,
            searchedBefore: false,
            createdAt: "2019-01-03T04:18:08.000Z",
            updatedAt: "2019-01-03T04:18:08.000Z"
          },
          {
            pid: "snY6Hub4XL7sx9GwjWb2kg",
            name: "Pizzeria Del-Dio",
            address: "3210 E Colonial Dr",
            city: "Orlando",
            region: "FL",
            price: 1,
            rating: "4.5",
            numberOfRatings: 141,
            longitude: -81.3434482134918,
            latitude: 28.5520465549289,
            searchedBefore: false,
            createdAt: "2019-01-03T04:18:08.000Z",
            updatedAt: "2019-01-03T04:18:08.000Z"
          },
          {
            pid: "79OcxliIkgasAEjH2pS01g",
            name: "Tomasino's Pizza",
            address: "2612 E Colonial Dr",
            city: "Orlando",
            region: "FL",
            price: 1,
            rating: "4.5",
            numberOfRatings: 194,
            longitude: -81.3498468,
            latitude: 28.551336,
            searchedBefore: false,
            createdAt: "2019-01-03T04:18:08.000Z",
            updatedAt: "2019-01-03T04:18:08.000Z"
          },
          {
            pid: "iX7R_COA8V-TMZGXOVRAjQ",
            name: "Lazy Moon Pizza",
            address: "1011 E Colonial Dr",
            city: "Orlando",
            region: "FL",
            price: 1,
            rating: "4.5",
            numberOfRatings: 297,
            longitude: -81.365976028836,
            latitude: 28.5534745,
            searchedBefore: false,
            createdAt: "2019-01-03T04:18:08.000Z",
            updatedAt: "2019-01-03T04:18:08.000Z"
          }
        ]
      }
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
      let data = this.routeObj.places;

      let lineCoordinates = [];
      let radius = this.radius;
      console.log(radius);
      let circle;
      let stage = 0;

      let nextLocationCounter = 0;
      this.nextLocation = data[nextLocationCounter];
      let nextLocation = data[nextLocationCounter];

      for (let place of data) {
        lineCoordinates.push([place.longitude, place.latitude]);
      }
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          function(position) {
            let crd = position.coords;
            let crdLngLat = turf.point([crd.longitude, crd.latitude]);
            let nextLocationLngLat = turf.point([
              nextLocation.longitude,
              nextLocation.latitude
            ]);
            // let radius = 0.25;
            let circleOptions = {
              units: "miles"
            };

            // console.log(radius);
            circle = turf.circle(
              nextLocationLngLat,
              parseFloat(radius),
              circleOptions
            );

            if (turf.booleanPointInPolygon(crdLngLat, circle)) {
              if (stage === 0) {
                alert(`You've made it!`);
                stage = 1;
              }
            } else {
              if (stage === 1) {
                alert(`You left`);
                stage = 0;
                nextLocationCounter++;
              } else {
                alert("You are not there yet");
              }
            }
          },
          function(error) {
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
        );
      } else {
        this.error = "Geolocation is not supported by this browser.";
      }

    }
  },
  mounted() {
    let map = this.map();
    let data = this.routeObj.places;
    let lineCoordinates = [];

    // let radius = this.radius;
    // let circle;
    // let stage = 0;

    // let nextLocationCounter = 0;
    // this.nextLocation = data[nextLocationCounter];
    // let nextLocation = data[nextLocationCounter];

    for (let place of data) {
      lineCoordinates.push([place.longitude, place.latitude]);
    }

    // function getLocation() {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.watchPosition(success, error);
    //   } else {
    //     this.error = "Geolocation is not supported by this browser.";
    //   }
    // }
    // function success(position) {
    //   let crd = position.coords;
    //   let crdLngLat = turf.point([crd.longitude, crd.latitude]);
    //   let nextLocationLngLat = turf.point([
    //     nextLocation.longitude,
    //     nextLocation.latitude
    //   ]);
    //   // let radius = 0.25;
    //   let circleOptions = {
    //     units: "miles"
    //   };

    //   // console.log(radius);
    //   circle = turf.circle(
    //     nextLocationLngLat,
    //     parseFloat(radius),
    //     circleOptions
    //   );

    //   if (turf.booleanPointInPolygon(crdLngLat, circle)) {
    //     if (stage === 0) {
    //       alert(`You've made it!`);
    //       stage = 1;
    //     }
    //   } else {
    //     if (stage === 1) {
    //       alert(`You left`);
    //       stage = 0;
    //       nextLocationCounter++;
    //     } else {
    //       alert("You are not there yet");
    //     }
    //   }
    // }

    // function error(error) {
    //   switch (error.code) {
    //     case error.PERMISSION_DENIED:
    //       this.error = "User denied the request for Geolocation.";
    //       break;
    //     case error.POSITION_UNAVAILABLE:
    //       this.error = "Location information is unavailable.";
    //       break;
    //     case error.TIMEOUT:
    //       this.error = "The request to get user location timed out.";
    //       break;
    //     case error.UNKNOWN_ERROR:
    //       this.error = "An unknown error occurred.";
    //       break;
    //   }
    // }

    // getLocation();


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
