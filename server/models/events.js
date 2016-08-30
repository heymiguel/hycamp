const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  attending: {
    type: Array,
  },
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;
