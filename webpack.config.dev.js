const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  debug: true,
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: path.join(__dirname, 'client'),
        exclude: [/node_modules/]
      }
    ],
    loaders: [
    // js
    {
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client'),
      exclude: [/node_modules/]
    },
    // CSS
    {
      test: /\.scss$/,
      include: [path.join(__dirname, 'client'), path.join(__dirname, 'styles')],
      loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap'],
    },
    ]
  },
  postcss: function() {
    return [autoprefixer]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
    new HtmlWebpackPlugin({
      template: './client/index.template.html',
      filename: 'index.html',
      appMountId: 'main',
      inject: 'body',
      files: {
        css: ['assets/main.css']
      }
    }),
  ],
};
