const express = require('express');

const router = express.Router();

const Cabin = require('../models/cabin');

// GET /getCabins
router.get('/getCabins', (req, res) => {
  // find all the cabins in the database
  Cabin.find({}, (err, cabins) => {
    // if there is an error, return it
    if (err) res.status(400).json(err);

    // otherwise send back all the cabins
    res.status(200).json(cabins);
  });
});


// POST /updateScore
router.post('/updateScore', (req, res, next) => {
  const { id, score } = req.body;

  // find a cabin by its ID
  Cabin.findOneAndUpdate({ _id: id }, { score }, { new: true }, (err, doc) => {
    // there is an error, return the error
    if (err) res.status(400).json(err);

    // otherwise, return the cabin
    res.status(200).json(doc);
  });
});

module.exports = router;