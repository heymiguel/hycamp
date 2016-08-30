const mongoose = require('mongoose');

const LeaderboardSchema = new mongoose.Schema({
  leaderboard: Object,
});

const LeaderboardSchema = mongoose.model('Event', EventSchema);
module.exports = LeaderboardSchema;
