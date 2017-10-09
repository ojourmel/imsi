/**
 * @author ojourmel
 */

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const falcorExpress = require('falcor-express');
const config = require('./config');
const db = require('./db');
const imsiModel = require('./imsi.model');

let app = express();

if ('development' == config.NODE_ENV) {
  app.use(logger('dev'));
}

db.query('SELECT * FROM creation', (err, dbres) => {
  console.log(JSON.stringify(dbres.rows, null, 2));
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Multer can be used to upload files from multipart/form-data
// app.use(multer({dest:'./uploads/'}).single('photo'));

// Serve endpoint code
app.use('/api/imsi.json', falcorExpress.dataSourceRoute((req, res) => imsiModel));

app.use('/api/test', (req, res) => {
  res.send({ key: 'value' });
});

app.use('/api/creation', (req, res) => {
  db.query('SELECT * FROM creation', null, (err, dbres) => {
    console.log(JSON.stringify(dbres.rows, null, 2));
    res.send(dbres);
  });
});

module.exports = app.listen(config.api_port, function () {
  console.log('Listening on port ' + config.api_port);
});

