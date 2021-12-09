var createError = require('http-errors');
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
// express setting
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// routing setting
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var settingsRouter = require('./routes/settings');
var viewerRouter = require('./routes/viewer');
var modelerRouter = require('./routes/modeler');

// apps
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);
app.set('layout', 'includes/_layout');
app.use(expressLayouts);

// express middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// use routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/settings', settingsRouter);
app.use('/viewer', viewerRouter);
app.use('/modeler', modelerRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
