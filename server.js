const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const request = require('request');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.dev.js');

// global constiable
const LOCAL_MONGO_DB = "mongodb://localhost:27017/hycamp";


const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

// *************************************************
//     A P P   I N I T I A L I Z A T I O N
// *************************************************
//create app
const app = express();

//create MongoDB connection
mongoose.connect(LOCAL_MONGO_DB); // basic local connection
const db = mongoose.connection;

//session options
const sessionOptions = {
  secret: "this is a super secret", // the most secret of secrets
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: db,
  }),
};

// passport configuration
require('./server/config/passport')(passport); // pass passport for configuration

//run session cache
app.use(session(sessionOptions));
//initialize passort
app.use(passport.initialize());
//restore session
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId, done(err, user));
});

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// *************************************************
//     A P P   R O U T E S
// *************************************************
const apiRouter = require('./server/router');
// include routes
require('./server/router/auth')(app, passport); // load our routes and pass in our app and fully configured passport
app.use('/api', apiRouter);

if (isDeveloping) {
  const compiler = webpack(webpackConfig);
  const middleware = webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/public'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
}

app.listen(port, () => {
  console.log('App running on port', port);
});
