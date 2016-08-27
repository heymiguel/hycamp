var express = require('express');
var router = express.Router();
var passport = require('passport');

// get /auth/login/github
router.get('/login/github', 
  passport.authenticate('github', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true,
  }));

// get /auth/login/facebok
router.get('/login/facebook',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true,
  }));

// // GET /auth/login/github
// router.get('/login/return', 
//   passport.authenticate('github', { faultureRedirect: '/' }),
//   function(req, res) {
//     // SUCESS Auth, redirect profile page
//     res.redirect('/profile');
//   });

// // GET /auth/login/facebook
// router.get('/login/return',
//   passport.authenticate('facebook', { faultureRedirect: '/' }),
//   function(req, res) {
//     // SUCCESS Auth, redirect profile page
//     res.redirect('/profile');
//   });

//GET /auth/logout
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
