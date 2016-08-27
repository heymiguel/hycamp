var express = require('express');
var router = express.Router();

module.exports = (app, passport) => {
  app.get('auth/login/github', 
    passport.authenticate('github', {
      successRedirect: '/',
      failureRedirect: '/',
      failureFlash: true,
    }));


  // =====================================
  // FACEBOOK ROUTES =====================
  // =====================================
  // route for facebook authentication and login
  app.get('/auth/login/facebook', passport.authenticate('facebook', { scope : 'email' }));

  // handle the callback after facebook has authenticated the user
  app.get('http://localhost:3000/auth/facebook/return',
      passport.authenticate('facebook', {
        successRedirect : '/profile',
        failureRedirect : '/'
     }));

  app.get('auth/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};


