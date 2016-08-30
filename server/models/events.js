const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  dateCreated: {
    type: Date,
    required: true,
  },
  eventDate: {
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
