<template>
  <div id="map-wrapper">
    <div id="map"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  data: function() {
    return {
      accessToken:
        "pk.eyJ1IjoidGhlbm9vZGxlbW9vc2UiLCJhIjoiY2pvdXM4c3ZrMWZnYTNrbW9ic2hmdjV6ZyJ9.-A735y9fU1TdsJ993uIKLA"
    };
  },
  computed: {
    routeObj() {
      return this.$store.state.info.routeObj;
    }
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
    }
  },
  beforeMount() {},
  mounted() {
    let map = this.map();
    let lineCoordinates = [];
    let data = this.routeObj.places;
    for (let place of data) {
      lineCoordinates.push([place.longitude, place.latitude]);
    }

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

<style scoped>
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
</style>
