const express = require('express');
const httpError = require('http-errors');
const bodyParser = require('body-parser');
const compress = require('compression');
const logger = require('morgan');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const config = require('./config');
const routes = require('../routes/index.route');
const path = require('path');
const app = express();

if (config.env === 'development') {
  app.use(logger('dev'));
}

var distDir = '../../dist/arduino-quiz-system';

app.use(express.static(path.join(__dirname, distDir)));
app.use(cors());

//if not an api call then go to index
app.use(/^((?!(api)).)*/, (req, res) => {
  res.sendFile(path.join(__dirname, distDir + '/index.html'));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(compress());
app.use(methodOverride());

app.use(helmet());

// API router
app.use('/api/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new httpError(404);
  return next(err);
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {
  // customize Joi validation errors
  if (err.isJoi) {
    err.message = err.details.map(e => e.message).join("; ");
    err.status = 400;
  }

  res.status(err.status || 500).json({
    message: err.message
  });
  next(err);
});



module.exports = app;
