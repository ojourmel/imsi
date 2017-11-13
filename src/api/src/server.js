/**
 * @author ojourmel
 */

const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const config = require("./config");

let app = express();

if ("development" == config.NODE_ENV) {
  app.use(logger("dev"));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Multer can be used to upload files from multipart/form-data
// app.use(multer({dest:"./uploads/"}).single("photo"));

app.use("/api/creators", (req, res) => res.json({message: "Hello World"}));

// Serve endpoint code
module.exports = app.listen(config.api_port, function () {
  console.log("Listening on port " + config.api_port);
});

