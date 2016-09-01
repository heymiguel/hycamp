const express = require('express');

const router = express.Router();

const User = require('../models/user');

router.get('/getUser', (req, res, next) => {
  const { id } = req.body;
  console.log('session', req.session);
  User.find({ _id: id}, (err, user) => {
    if (err) res.status(400).json(err);
    res.status(200).json(user);
  });
});

module.exports = router;