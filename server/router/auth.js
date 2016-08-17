var express = require('express');
var router = express.Router();
var passport = require('passport');

// GET /auth/login/github
router.get('/login/github', 
  passport.authenticate('github'));

// GET /auth/login/facebok
router.get('/login/facebok',
  passport.authenticate('facebook'));

// GET /auth/login/github
router.get('/login/return', 
  passport.authenticate('github', { faultureRedirect: '/' }),
  function(req, res) {
    // SUCESS Auth, redirect profile page
    res.redirect('/profile');
  });

// GET /auth/login/facebook
router.get('/login/return',
  passport.authenticate('facebook', { faultureRedirect: '/' }),
  function(req, res) {
    // SUCCESS Auth, redirect profile page
    res.redirect('/profile');
  });

//GET /auth/logout
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
