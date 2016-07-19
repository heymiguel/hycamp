const express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
  require('./dev-server')(app);
}

app.use('/assets', express.static('public/assets', {
  fallthrough: false,
}));

app.get('/*', (req, res) => {
  res.status(200).sendFile(`${__dirname}/public/index.html`);
});

app.listen(3000);
