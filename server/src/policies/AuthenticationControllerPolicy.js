const Joi = require("joi");

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$")),
      username: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{1,16}$"))
    };

    const { error, value } = Joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "You must provide a valid email address"
          });
          break;

        case "password":
          res.status(400).send({
            error:
              "The password may only be letters or numbers and must be 8-32 characters."
          });
          break;

        case "username":
          res.status(400).send({
            error:
              "Your username cannot exceed 16 characters and must not contain any special characters"
          });
          break;

        default:
          res.status(400).send({
            error: "Error registering the account"
          });
      }
    } else {
      next();
    }
  }
};
