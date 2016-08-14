// *************************************************
//     M O D U L E   I M P O R T S
// *************************************************
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// *************************************************
//     A P P   I N I T I A L I Z A T I O N
// *************************************************

//create app
var app = express();

//create MongoDB connection
mongoose.connect("mongodb://localhost:27017/hycamp");
var db = mongoose.connection;

//session options
var sessionOptions = {
  secret: "this is a super secret",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: db,
  }),
};

//run session cache
app.use(session(sessionOptions));

//initialize passort
app.use(passport.initialize());

//restore session
app.use(passport.session());

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// include routes
var routes = require('./router/index');

// listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});