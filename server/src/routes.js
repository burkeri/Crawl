const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const SearchController = require("./controllers/SearchController");
module.exports = app => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );

  app.post(
    "/login",
    // AuthenticationControllerPolicy.login,
    AuthenticationController.login
  );

  app.post("/search", SearchController.search);
};
