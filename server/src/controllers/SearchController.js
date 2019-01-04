require("dotenv").config();

const { Place } = require("../models");
const { Tag } = require("../models");
const yelp = require("yelp-fusion");
const keys = require("../config/keys");
const axios = require("axios");
const geolib = require("geolib");

const client = yelp.client(keys.yelp.key);

module.exports = {
  async search(req, res) {
    try {
      const userPosition = {
        latitude: parseFloat(req.body.userPosition.latitude),
        longitude: parseFloat(req.body.userPosition.longitude)
      };

      const location = req.body.location;
      const query = req.body.query;
      const price = req.body.price;

      let yelp_data;
      let finalData;
      const dbData = await Tag.findAll({
        where: {
          tag: query
        },
        include: [
          {
            model: Place,
            where: { city: location, price: price }
          }
        ]
      });
      if (dbData == false) {
        yelp_data = await client
          .search({
            term: query,
            location: location,
            price: price,
            sort_by: "rating",
            limit: 20
          })
          .then(async function(response) {
            yelp_data = response.jsonBody.businesses.filter(
              business => business.rating >= 4 && business.review_count >= 50
            );
            let pushNewPlaces = async function() {
              let dataToPush = [];
              let counter = 0;
              for (business of yelp_data) {
                const data = await Place.findOne({
                  where: {
                    pid: business.id
                  }
                });

                if (data == null) {
                  dataToPush.push({
                    pid: business.id,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    region: business.location.state,
                    price: price,
                    rating: business.rating,
                    numberOfRatings: business.review_count,
                    longitude: business.coordinates.longitude,
                    latitude: business.coordinates.latitude
                  });
                }
                counter++;
              }

              if (counter === yelp_data.length) {
                return dataToPush;
              }
            };
            let dataToPush = await pushNewPlaces();

            await Place.bulkCreate(dataToPush);

            let pushNewTags = async function() {
              let yelp_counter = 0;
              let category_counter = 0;
              let tagsToPush = [];
              for (business of yelp_data) {
                await Tag.create({
                  pid: business.id,
                  tag: query
                });
                for (category of business.categories) {
                  let data = await Tag.findAll({
                    where: {
                      pid: business.id,
                      tag: category.alias
                    }
                  });

                  if (data == false) {
                    tagsToPush.push({
                      pid: business.id,
                      tag: category.alias
                    });
                  }
                  category_counter++;
                  if (category_counter === business.categories.length) {
                    category_counter = 0;
                    yelp_counter++;
                  }
                }
                if (yelp_counter === yelp_data.length) {
                  return tagsToPush;
                }
              }
            };
            let tagsToPush = await pushNewTags();

            await Tag.bulkCreate(tagsToPush);
            return yelp_data;
          })
          .catch(e => {
            console.log(e);
          });
      }
      if (yelp_data) {
        const dbData = await Tag.findAll({
          where: {
            tag: query
          },
          include: [
            {
              model: Place,
              where: {
                city: location,
                price: price
              }
            }
          ]
        });
        finalData = dbData;
      } else {
        finalData = dbData;
      }
      closestLocations = [];
      closestLocationsName = [];
      closestLocationsLatLng = [];
      let smallestDistance = Infinity;
      let currentLocation;
      let placeCounter = 0;
      let lastLocation = userPosition;
      // if (finalData.length >= 5) {

      buildArray = function() {
        let placeLocation = {};

        for (place of finalData) {
          placeLocation = {
            latitude: place.Place.dataValues.latitude,
            longitude: place.Place.dataValues.longitude
          };

          let distance = geolib.getDistance(lastLocation, placeLocation);
          if (
            distance < smallestDistance &&
            closestLocationsName.indexOf(place.Place.dataValues.pid) === -1
          ) {
            currentLocation = place.Place.dataValues;

            currentLocationLatLng = placeLocation;
            smallestDistance = distance;
          }
        }

        if (
          placeCounter < 5 &&
          closestLocationsName.indexOf(currentLocation.pid) === -1
        ) {
          closestLocationsLatLng.push(currentLocationLatLng);
          lastLocation = {
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude
          };
          smallestDistance = Infinity;
          placeCounter++;
          closestLocations.push(currentLocation);
          closestLocationsName.push(currentLocation.pid);
          buildArray();
        }
      };
      await buildArray();

      const centerOfPoints = geolib.getCenter(closestLocationsLatLng);

      res.send({
        center: centerOfPoints,
        places: closestLocations
      });
      // } else {
      //   console.log("NOT ENOUGH BIG DATA");
      // }
    } catch (err) {
      console.log(err);
    }
  }
};
