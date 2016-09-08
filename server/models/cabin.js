const mongoose = require('mongoose');

const CabinSchema = new mongoose.Schema({
  label: String,
  score: Number,
  members: Array,
});

const Cabin = mongoose.model('Cabin', CabinSchema);
module.exports = Cabin;
