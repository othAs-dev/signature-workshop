var express = require("express");
var cookieParser = require("cookie-parser");
const cors = require("cors");
const classController = require("./controllers/class.controller");
const authController = require("./controllers/auth.controller");
const mock = require("./mock/mock");

(function start() {
  console.log(process.env.TEST_ENV
    );
  var app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(cors());

  const db = require("./model/index.js");
  db.sequelize
    .sync({ force: true })
    .then(() => mock(db))
    .catch((err) => console.log("Failed: ", err.message));

  app.use('/auth', authController() )
  app.use("/class", classController());

  app.listen(3020, console.log);
})();
