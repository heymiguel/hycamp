const express = require('express');

const router = express.Router();

const User = require('../models/user');

router.get('/getUser', (req, res, next) => {
  res.status(200).json(req.user);
});

module.exports = router;