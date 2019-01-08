const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const SearchController = require("./controllers/SearchController");
const ReviewController = require("./controllers/ReviewController");
module.exports = app => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );

  app.post("/login", AuthenticationController.login);

  app.post("/search", SearchController.search);

  app.post("/review", ReviewController.review);
};
