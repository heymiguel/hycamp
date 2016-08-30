const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Event = require('../models/event');

router.get('/getEvents', (req, res, done) => {
  //find all the events from the database
  const events = Event.find({}, (err, events) => {
    //if there is an error, respond with an error
    if (err) res.status(400).json(err);

    //else send all the events to the requester
    res.status(200).json(events);
  });
});

router.post('/createEvent', (req, res, done) => {
  const { createdBy, date, label } = req.body;

  const newEvent =  new Event({
    date,
    createdBy,
    label,
  });

  newEvent.save((err) => {
    if (err) throw err;

    console.log('event created!');
  })

  done();
});

router.post('/deleteEvent', (req, res, done) => {

});

router.post('/updateEvent', (req, res, done) => {

});

module.exports = router;
