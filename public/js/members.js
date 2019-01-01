$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  const foodSearch = document.getElementById("food-search");
  let lat;
  let lng;

  foodSearch.addEventListener("submit", event => {
    let searchFoodInput = document.getElementById("searchFoodInput").value;
    let searchLocationInput = document.getElementById("searchLocationInput")
      .value;
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

      $.post("/api/user_search", $("#food-search").serialize(), function(data) {
        console.log(data);
        let geojson;
        let locationArray = [];
        let markerNumber = 0;
        for (let i = 0; i < data.length; i++) {
          markerNumber++;
          console.log(markerNumber);
          console.log(data[i]);
          locationArray.push(data[i].coordinates.longitude);
          locationArray.push(data[i].coordinates.latitude);
          geojson = {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {
                  message: data[i].name,
                  iconSize: [35, 35]
                },
                geometry: {
                  type: "Point",
                  coordinates: [
                    data[i].coordinates.longitude,
                    data[i].coordinates.latitude
                  ]
                }
              }
            ]
          };
          geojson.features.forEach(function(marker) {
            // create a DOM element for the marker

            var el = document.createElement("div");
            el.className = "marker";
            el.style.backgroundImage = `url(/images/map-icons/number_${markerNumber}.png)`;
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
                  [locationArray[0], locationArray[1]],
                  [locationArray[2], locationArray[3]],
                  [locationArray[4], locationArray[5]],
                  [locationArray[6], locationArray[7]],
                  [locationArray[8], locationArray[9]]
                ]
              }
            }
          },
          layout: {
            "line-join": "round",
            "line-cap": "round"
          },
          paint: {
            "line-color": "#fd715b",
            "line-width": 8
          }
        }); //data is the response from the backend
      });
      document.getElementById("searchFoodInput").value = "";
      document.getElementById("searchLocationInput").value = "";

      // $.get("/api/user_search").then(data => {
      //   console.log(data);
      // });
    });
  });

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.userName);
  });
});
