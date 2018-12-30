$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  const foodSearch = document.getElementById("food-search");
  let lat;
  let lng;

  foodSearch.addEventListener("submit", event => {
    const searchInput = document.getElementById("searchInput").value;
    event.preventDefault();

    $.ajax({
      url:
        "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAVpmuLGpbN52fYXmPxm1bgWqibre7ZXiI",
      method: "POST"
    }).then(function(response) {
      lat = response.location.lat;
      lng = response.location.lng;
      mapboxgl.accessToken =
        "pk.eyJ1IjoidGhlbm9vZGxlbW9vc2UiLCJhIjoiY2pvdXM4c3ZrMWZnYTNrbW9ic2hmdjV6ZyJ9.-A735y9fU1TdsJ993uIKLA";
      var map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/mapbox/streets-v9", // stylesheet location
        center: [lng, lat], // starting position [lng, lat]
        zoom: 13 // starting zoom
      });

      map.on("load", function() {
        map.loadImage(
          "https://img.icons8.com/color/48/000000/user-location.png",
          function(error, image) {
            if (error) throw error;
            map.addImage("me", image);
            map.addLayer({
              id: "points",
              type: "symbol",
              source: {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: [
                    {
                      type: "Feature",
                      geometry: {
                        type: "Point",
                        coordinates: [lng, lat]
                      }
                    }
                  ]
                }
              },
              layout: {
                "icon-image": "me",
                "icon-size": 1
              }
            });
          }
        );
      });

      $.get("/api/user_search").then(data => {
        console.log(data.results);
        let geojson;
        let locationArray = [];
        for (let i = 0; i < data.results.length; i++) {
          console.log(data.results[i]);
          locationArray.push(data.results[i].geometry.location.lng);
          locationArray.push(data.results[i].geometry.location.lat);
          geojson = {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {
                  message: data.results[i].name,
                  iconSize: [48, 48]
                },
                geometry: {
                  type: "Point",
                  coordinates: [
                    data.results[i].geometry.location.lng,
                    data.results[i].geometry.location.lat
                  ]
                }
              }
            ]
          };
          geojson.features.forEach(function(marker) {
            // create a DOM element for the marker
            var el = document.createElement("div");
            el.className = "marker";
            el.style.backgroundImage = `url(https://img.icons8.com/color/48/000000/marker.png)`;
            el.style.width = marker.properties.iconSize[0] + "px";
            el.style.height = marker.properties.iconSize[1] + "px";

            el.addEventListener("click", function() {
              window.alert(marker.properties.message);
            });

            // add marker to map
            new mapboxgl.Marker(el)
              .setLngLat(marker.geometry.coordinates)
              .addTo(map);
          });
        }
        console.log(locationArray);
        map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: [
                  [lng, lat],
                  [locationArray[0], locationArray[1]],
                  [locationArray[2], locationArray[3]],
                  [locationArray[4], locationArray[5]],
                  [locationArray[6], locationArray[7]]
                ]
              }
            }
          },
          layout: {
            "line-join": "round",
            "line-cap": "round"
          },
          paint: {
            "line-color": "#888",
            "line-width": 8
          }
        });
      });
    });
  });

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.userName);
  });
});
