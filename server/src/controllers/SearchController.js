const { Place } = require("../models");
const yelp = require("yelp-fusion");
const keys = require("../config/keys");
const client = yelp.client(keys.keys.yelp);

module.exports = {
  async search(req, res) {
    try {
      const location = req.body.location;
      const query = req.body.query;
      const price = req.body.price;
      const dbData = await Place.findAll({
        where: {
          city: location
        }
      });
      if (dbData == false) {
        console.log("This Block Ran");
        client
          .search({
            term: query,
            location: location,
            price: price,
            sort_by: "rating",
            limit: 20
          })
          .then(response => {
            console.log(response.jsonBody.businesses[0].rating);
            console.log(response.jsonBody.businesses[0].review_count);
            const yelp_data = response.jsonBody.businesses.filter(
              business => business.rating >= 4 && business.review_count >= 50
            );
            for (business of yelp_data) {
              Place.create({
                pid: business.id,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                region: business.location.state,
                rating: business.rating,
                numberOfRatings: business.review_count,
                longitude: business.coordinates.longitude,
                latitude: business.coordinates.latitude
              });
            }
            res.send(yelp_data);
          })
          .catch(e => {
            console.log(e);
          });
      } else if (dbData == true) {
        res.send(dbData);
      }
    } catch (err) {
      console.log(err);
    }
  }
};
