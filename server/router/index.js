const express = require('express');

const router = express.Router();

// GET TO ROUTIN'
router.use('/feed', require('./feed'));
router.use('/leaderboard', require('./leaderboard'));
router.use('/events', require('./events'));

module.exports = router;
