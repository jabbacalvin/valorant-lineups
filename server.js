var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');

require('dotenv').config();
// connect to the database with AFTER the config vars are processed
require('./config/database');
require('./config/passport');

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");
let agentsRouter = require("./routes/agents");
let lineupsRouter = require("./routes/lineups");
let mapsRouter = require("./routes/maps");
let lineupsApiRouter = require("./routes/api/lineups");
let mapsApiRouter = require("./routes/api/maps");
let agentsApiRouter = require("./routes/api/agents");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/agents", agentsRouter);
app.use("/lineups", lineupsRouter);
app.use("/maps", mapsRouter);
app.use("/api/lineups", lineupsApiRouter);
app.use("/api/maps", mapsApiRouter);
app.use("/api/agents", agentsApiRouter);

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
