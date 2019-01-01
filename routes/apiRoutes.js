var db = require("../models");
var passport = require("../config/passport");
const axios = require("axios");
const yelp = require("yelp-fusion");
const client = yelp.client(
  "qW6J2Yi8cQQab7AJrwClBrgY4TLPh2COFDh6PWp2zrMEa5_IriSaNhqOMY_eFoVipx31cmwAUiUl_gmfC3ZByKsSpsZ7neZqgzmWpbAPQFDWw0R7QHZkVNA6r0EpXHYx"
);
module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        name: req.user.name,
        userName: req.user.userName,
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post("/api/user_search", function(req, res) {
    console.log(req.body);

    let inputFoodContent = req.body.searchFoodBar;
    let inputLocationContent = req.body.searchLocationBar;
    // res.json(inputLocationContent);
    console.log(`Outside of get request ${inputFoodContent}`);
    console.log(`Outside of get request ${inputLocationContent}`);

    client
      .search({
        term: inputFoodContent,
        location: inputLocationContent,
        sort_by: "rating",
        limit: 5
      })
      .then(response => {
        res.json(response.jsonBody.businesses);
      })
      .catch(e => {
        console.log(e);
      });

    // app.get("/api/user_search", (req, res) => {
    //   axios
    //     .post(
    //       "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAVpmuLGpbN52fYXmPxm1bgWqibre7ZXiI"
    //     )
    //     .then(response => {
    //       let latitude = response.data.location.lat;
    //       let longitude = response.data.location.lng;
    //     });
    // });
  });
};
