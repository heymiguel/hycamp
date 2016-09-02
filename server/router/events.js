const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Event = require('../models/events');

// GET /getEvents
router.get('/getEvents', (req, res, next) => {
  //find all the events from the database
  Event.find({}, (err, events) => {
    //if there is an error, respond with an error
    if (err) res.status(400).json(err);
    console.log(events);
    //else send all the events to the requester
    res.status(200).json(events);
  });
});

// POST /createEvent
router.post('/createEvent', (req, res, next) => {
  console.log(req.body);
  const { createdBy, label, eventDate, location } = req.body;
  // create a date for the event
  const dateCreated = Date.now();

  // // if label isn't a string, return an error
  // if (typeof label !== 'string') {
  //   const err = 'expected label to be a string';
  //   res.status(400).json(err);
  //   return next();
  // }

  // // if eventDate isn't a Date Object, return an error
  // if (eventDate instanceof Date) {
  //   const err = 'expected eventDate to be a Date object';
  //   res.status(400).json(err);
  //   return next();
  // }

  // // if location isn't a strng, return an error
  // if (typeof location !== 'string') {
  //   const err = 'expected location to be a string';
  //   res.status(400).json(err);
  //   return next();
  // }

  const newEvent =  new Event({
    dateCreated,
    eventDate,
    location,
    createdBy,
    label,
  });

  newEvent.save((err) => {
    if (err) res.status(400).json(err);

    res.status(200).json(newEvent);
  });

  next();
});

// POST /deleteEvent
router.post('/deleteEvent', (req, res, next) => {
  const { id }  = req.body;

  if (typeof id !== 'string') {
    const err = 'expected if to be a string';
    res.status(400).json(err);
    return next();
  }

  // find an event by its ID and remove it
  Event.findByIdAndRemove(id, {}, (err) => {
    // if there is an error, return it
    if (err) res.status(400).json(err);

    // otherwise send back the the ID of the removed object
    res.status(200).json({id});
  });
});

// POST /updateEvent
router.post('/updateEvent', (req, res, next) => {
  const { id, data } = req.body;
  // find an event by its ID and update
  Event.findOneAndUpdate({ _id: id }, data, { new: true }, (err, doc) => {
    // if there is an error, return it
    if (err) res.status(400).json(err);
    // otherwise send back the updated event
    res.status(200).json(doc);
  });
});

module.exports = router;
