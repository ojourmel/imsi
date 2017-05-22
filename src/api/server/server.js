/**
 * @author ojourmel
 */

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const falcorExpress = require('falcor-express');
const config = require('./config');
const imsi_model = require('./imsi.model');

let app = express();

if ('development' == config.NODE_ENV) {
  app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Multer can be used to upload files from multipart/form-data
// app.use(multer({dest:'./uploads/'}).single('photo'));

// Serve endpoint code
app.use('/api/imsi.json', falcorExpress.dataSourceRoute( (req, res) => imsi_model));

module.exports = app.listen(config.api_port, function () {
  console.log('Listening on port ' + config.api_port);
});

