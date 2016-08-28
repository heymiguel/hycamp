// *************************************************
//     M O D U L E   I M P O R T S
// *************************************************
const express = require('express');
const bodyParser = require('body-parser');
const cookieParster = require('cookie-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// global constiable
const LOCAL_MONGO_DB = "mongodb://localhost:27017/hycamp";

// *************************************************
//     A P P   I N I T I A L I Z A T I O N
// *************************************************
//create app
const app = express();

//create MongoDB connection
mongoose.connect(LOCAL_MONGO_DB); // basic local connection
const db = mongoose.connection;

//session options
const sessionOptions = {
  secret: "this is a super secret", // the most secret of secrets
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: db,
  }),
};

// passport configuration
require('./config/passport')(passport); // pass passport for configuration

//run session cache
app.use(session(sessionOptions));
//initialize passort
app.use(passport.initialize());
//restore session
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId, done(err, user));
});

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// *************************************************
//     A P P   R O U T E S
// *************************************************
// include routes
require('./router/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// listen on port 8080
app.listen(8080, function () {
  console.log('Express app listening on port 8080');
});
