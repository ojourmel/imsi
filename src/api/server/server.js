/**
 * @author ojourmel
 */

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config');

let app = express();

if ('development' == config.NODE_ENV) {
  app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Multer can be used to upload files from multipart/form-data
// app.use(multer({dest:'./uploads/'}).single('photo'));

/*
// CORS
// @see http://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
*/

// Serve endpoint code
app.get('/', (req, res) => res.sendStatus(200));
app.get('/api', (req, res) => res.sendStatus(200));

module.exports = app.listen(config.api_port, function () {
  console.log('Listening on port ' + config.api_port);
});

