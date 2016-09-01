var express = require('express');
var router = express.Router();

module.exports = (app, passport) => {
  app.get('/auth/login/github', passport.authenticate('github'));

  app.get('/auth/github/return', 
    passport.authenticate('github', {
      successRedirect: false,
      failureRedirect: '/',
  }), (req, res, next) => {
      console.log(req.session);

      res.redirect('/');
    });

  // =====================================
  // FACEBOOK ROUTES =====================
  // =====================================
  // route for facebook authentication and login
  app.get('/auth/login/facebook', passport.authenticate('facebook', { scope : 'email' }));

  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/return',
    passport.authenticate('facebook', {
      successRedirect: 'http://localhost:3000/',
      failureRedirect: 'http://localhost:3000/',
    }));

  // app.get('/return/user', (req, res) => {
  //   res.status(200).json(req.user);
  // })

  app.get('auth/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};
