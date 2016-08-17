var express = require('express');
var router = express.Router();
var passport = require('passport');

// GET /auth/login/github
router.get('/login/github', 
  passport.authenticate('github'));

// GET /auth/login/github
router.get('/login/return', 
  passport.authenticate('github', { faultureRedirect: '/', }),
  function(req, res) {
    // SUCESS Auth, redirect profile page
    res.redirect('/profile');
  });

//GET /auth/logout
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
