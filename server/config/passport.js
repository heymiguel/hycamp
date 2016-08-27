// config/passport.js

// load all the things we need
// var LocalStrategy   = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

// load up the user model
var User            = require('../models/user');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(new FacebookStrategy({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/facebook/return',
    }, (token, refreshToken, profile, done) => {
      console.log(profile);
      // asynchronous
      process.nextTick(() => {
        // find the user in the database based on their facebook id
        User.findOne({ 'facebook.id' : profile.id }, (err, user) => {
            // if there is an error, stop everything and return that
            // ie an error connecting to the database
            if (err) return done(err);

            // if the user is found, then log them in
            if (user) {
              return done(null, user); // user found, return that user
            } else {
              // if there is no user found with that facebook id, create them
              var newUser            = new User();
              // set all of the facebook information in our user model
              newUser.facebook.id    = profile.id; // set the users facebook id                   
              newUser.facebook.token = token; // we will save the token that facebook provides to the user                    
              newUser.facebook.name  = `${profile.name.givenName} ${profile.name.familyName}`; // look at the passport user profile to see how names are returned
              newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

              // save our user to the database
              newUser.save(function(err) {
                if (err)
                    throw err;

                // if successful, return the new user
                return done(null, newUser);
              });
          }
        });
      });
    }));

    // // Configure facebook strategy
    // passport.use(new FacebookStrategy({
    //   clientID: process.env.FACEBOOK_APP_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    //   callbackURL: 'http://localhost:3000/auth/facebook/return',
    // }, (accessToken, refreshToken, profile, done) => {
    //   console.log('testststststs');
    //   if (profile.emails[0]) {
    //     User.findOneAndUpdate({
    //       email: profilxe.emails[0].value,
    //     },
    //     {
    //       name: profile.displayName || profile.username,
    //       email: profile.emails[0].value,
    //       photo: profile.photos[0].value,
    //     },
    //     {
    //       upsert: true, 
    //     }, done());
    //   } else {
    //     const noEmailError = new Error("Your email privacy settings prevent you from signing into hackeryou camp.");

    //     done(noEmailError, null);
    //   }
    // }));
};
