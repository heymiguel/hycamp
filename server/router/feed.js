const express = require('express');
const request = require('request');

const router = express.Router();

const apiToken = process.env.CROWDRIFF_API_TOKEN;

const errRes = (res, code, body) => {
  res.json({
    meta: {
      code: code,
      error: body
    }
  });
};

router.get('/', (req, res) => {
  // TODO talk to fowler about offsets
  const reqUrl = `https://api.derp.website/v1/search?token=${apiToken}&col-id=227`;
  const reqOpts = {
    headers: {'content-type' : 'application/json'},
    uri: reqUrl,
    body: JSON.stringify({
      search_term: 'bluejays',
    }),
  };

  request.post(reqOpts, (error, response, body) => {
    if (error) {
      errRes(res, response.statusCode, error);
    } else if (response.statusCode !== 200) {
      console.log(body, response.statusCode);
      errRes(res, response.statusCode, 'Non-200 response from CrowdRiff API');
    } else {
      res.set('Content-Type', 'application/json');
      res.send(body);
    }
  });
});

module.exports = router;