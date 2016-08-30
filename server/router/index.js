const express = require('express');

const router = express.Router();

// GET TO ROUTIN'
router.use('/feed', require('./feed'));
router.use('/leaderboard', require('./leaderboard'));

module.exports = router;
