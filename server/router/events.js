const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Event = require('../models/events');

// GET /getEvents
router.get('/getEvents', (req, res, done) => {
  //find all the events from the database
  const events = Event.find({}, (err, events) => {
    //if there is an error, respond with an error
    if (err) res.status(400).json(err);

    //else send all the events to the requester
    res.status(200).json(events);
  });
});

// POST /createEvent
router.post('/createEvent', (req, res, done) => {
  const { createdBy, label } = req.body;
  // create a date for the event
  const dateCreated = Date.now();

  //
  const newEvent =  new Event({
    dateCreated,
    createdBy,
    label,
  });

  newEvent.save((err) => {
    if (err) res.status(400).json(err);

    res.status(200).json(newEvent);
  });

  done();
});

// POST /deleteEvent
router.post('/deleteEvent', (req, res, done) => {
  const { id }  = req.body;

  // find an event by its ID and remove it
  Event.findByIdAndRemove(id, {}, (err) => {
    // if there is an error, return it
    if (err) res.status(400).json(err);

    // otherwise send back the the ID of the removed object
    res.status(200).json(id);
  });
});

// POST /updateEvent
router.post('/updateEvent', (req, res, done) => {
  const { id, data } = req.body;
  // // find an event by its ID and update
  Event.findOneAndUpdate({ _id: id }, data, { new: true }, (err, doc) => {
    // if there is an error, return it
    if (err) res.status(400).json(err);
    // otherwise send back the updated event
    res.status(200).json(doc);
  });
});

module.exports = router;
