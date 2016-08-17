// *************************************************
//     M O D U L E   I M P O R T S
// *************************************************
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// *************************************************
//     C O N F I G U R E   S T R A T E G I E S
// *************************************************
// Configure GitHub Strategy
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/github/return',
}, function(accessToken, refreshToken, profile, done) {
  if (profile.emails[0]) {
    User.findOneAndUpdate({
      email: profilxe.emails[0].value,
    },
    {
      name: profile.displayName || profile.username,
      email: profile.emails[0].value,
      photo: profile.photos[0].value,
    },
    {
      upsert: true, 
    }, done());
  } else {
    var noEmailError = new Error("Your email privacy settings prevent you from signing into hackeryou camp.");

    done(noEmailError, null);
  }
}));

passprt.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/return',
}, function(accessToken, refreshToken, profile, done) {
  if (profile.emails[0]) {
    User.findOneAndUpdate({
      email: profilxe.emails[0].value,
    },
    {
      name: profile.displayName || profile.username,
      email: profile.emails[0].value,
      photo: profile.photos[0].value,
    },
    {
      upsert: true, 
    }, done());
  } else {
    var noEmailError = new Error("Your email privacy settings prevent you from signing into hackeryou camp.");

    done(noEmailError, null);}));

passport.serializeUser(function(user, done){
  done(null, user._id);
});

passport.deserializeUser(function(userId, done) {
  User.findById(userId, done(err, user));
});


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
  secret: "this is a super secret", // the most secret of secrets
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

// *************************************************
//     A P P   R O U T E S
// *************************************************
// include routes
var auth = require('./router/auth');

app.use('/auth', auth);

// listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});