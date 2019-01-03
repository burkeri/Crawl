<template>
  <div id="map-wrapper">
    <div id="map"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  data() {
    return {
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
    }
  },
  mounted() {
    let map = this.map();
    let data = this.routeObj.places;

    // let geoJson = {
    //   id: "points",
    //   type: "symbol",
    //   source: {
    //     type: "geojson",
    //     data: {
    //       type: "FeatureCollection",
    //       features: [
    //         {
    //           type: "Feature",
    //           geometry: {
    //             type: "Point",
    //             coordinates: [data[0].longitude, data[0].latitude]
    //           },
    //           properties: {
    //             title: data[0].name,
    //             icon: "circle"
    //           }
    //         },
    //         {
    //           type: "Feature",
    //           geometry: {
    //             type: "Point",
    //             coordinates: [data[1].longitude, data[1].latitude]
    //           },
    //           properties: {
    //             title: data[1].name,
    //             icon: "circle"
    //           }
    //         },
    //         {
    //           type: "Feature",
    //           geometry: {
    //             type: "Point",
    //             coordinates: [data[2].longitude, data[2].latitude]
    //           },
    //           properties: {
    //             title: data[2].name,
    //             icon: "circle"
    //           }
    //         },
    //         {
    //           type: "Feature",
    //           geometry: {
    //             type: "Point",
    //             coordinates: [data[3].longitude, data[3].latitude]
    //           },
    //           properties: {
    //             title: data[3].name,
    //             icon: "circle"
    //           }
    //         },
    //         {
    //           type: "Feature",
    //           geometry: {
    //             type: "Point",
    //             coordinates: [data[4].longitude, data[4].latitude]
    //           },
    //           properties: {
    //             title: data[4].name,
    //             icon: "circle"
    //           }
    //         }
    //       ]
    //     }
    //   },
    //   layout: {
    //     "icon-image": "{icon}-15",
    //     "text-field": "{title}",
    //     "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    //     "text-offset": [0, 0.6],
    //     "text-anchor": "top",
    //     "icon-allow-overlap": true,
    //     "icon-ignore-placement": true,
    //     "text-allow-overlap": true
    //     // "icon-color": "#fd593f"
    //   }
    // };
    map.on("load", function() {
      for (let place of data) {
        const el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundColor = "#fd593f";
        el.style.width = "25px";
        el.style.height = "25px";
        el.style.borderRadius = "50%";

        new mapboxgl.Marker(el)
          .setLngLat([place.longitude, place.latitude])
          .addTo(map);
      }
    });
  }
};
</script>

<style scoped>
#map {
  margin: 0 auto;
  width: 500px;
  height: 500px;
}

#map-wrapper {
  text-align: left;
}
</style>
