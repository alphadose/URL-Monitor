const express = require('express'),
    	path = require('path'),
    	favicon = require('serve-favicon'),
    	logger = require('morgan'),
    	bodyParser = require('body-parser'),
    	routes = require('./routes/routes'),
    	daemon = require('./utils/DaemonManager'),
    	config = require('./config.json');

var app = express();
var timer = setInterval(daemon, config.time_interval);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
