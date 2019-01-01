const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./models");
const config = require("./config/config");
const serveStatic = require("serve-static");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
app.use(serveStatic(`${__dirname}/../../dist`));
console.log(process.env);

require("./routes")(app);

db.sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`Server started of port ${config.port}`);
});
