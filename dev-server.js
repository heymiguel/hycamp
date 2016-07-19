const webpack = require('webpack');
const config = require('./webpack.config.dev');

const compiler = webpack(config);

function devServer(app) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

module.exports = devServer;