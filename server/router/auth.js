var express = require('express');
var router = express.Router();

module.exports = (app, passport) => {
  app.get('/auth/login/github', passport.authenticate('github'));

  app.get('/auth/github/return', 
    passport.authenticate('github', {
      successRedirect : 'return/user',
      failureRedirect : 'http://localhost:3000/'
    }));

  // =====================================
  // FACEBOOK ROUTES =====================
  // =====================================
  // route for facebook authentication and login
  app.get('/auth/login/facebook', passport.authenticate('facebook', { scope : 'email' }));

  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/return',
    passport.authenticate('facebook', (res, req) => {
      res.json(req.body.user);
    }));

  app.get('/return/user', (req, res) => {
    res.status(200).json(req.user);
  })

  app.get('auth/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};
