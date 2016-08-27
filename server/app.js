// *************************************************
//     M O D U L E   I M P O R T S
// *************************************************
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// global constiable
const LOCAL_MONGO_DB = "mongodb://localhost:27017/hycamp";

// *************************************************
//     C O N F I G U R E   S T R A T E G I E S
// *************************************************
// Configure GitHub Strategy
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/',
}, (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  if (profile.emails[0]) {
    User.findOneAndUpdate({
      email: profile.emails[0].value,
    },
    {
      name: profile.displayName || profile.username,
      email: profile.emails[0].value,
      admin: false,
      cerated: Date.now(),
    },
    {
      upsert: true, 
    }, done());
  } else {
    const noEmailError = new Error("Your email privacy settings prevent you from signing into hackeryou camp.");

    done(noEmailError, null);
  }
}));

// Configure facebook strategy
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/return',
}, (accessToken, refreshToken, profile, done) => {
  console.log('testststststs');
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
    const noEmailError = new Error("Your email privacy settings prevent you from signing into hackeryou camp.");

    done(noEmailError, null);
  }
}));


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
const auth = require('./router/auth');

app.use('/auth', auth);

// listen on port 8080
app.listen(8080, function () {
  console.log('Express app listening on port 8080');
});
