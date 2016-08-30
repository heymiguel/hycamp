const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    { 
      test: /\.scss$/, 
      include: [path.join(__dirname, 'client'), path.join(__dirname, 'styles')],
      loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap'],
    },
    // ICON FONT
    {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader?name=assets/font/[name].[ext]',
    },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  },

  stats: {
    chunkModules: false,
    colors: true
  },
  postcss: function() {
    return [autoprefixer]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.template.html',
      filename: 'index.html',
      appMountId: 'main',
      inject: false,
      files: {
        css: ['assets/main.css']
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify('production'),
      }
    }),
    new ExtractTextPlugin('assets/main.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourceMap: false,
      compress: { warnings: false }
    }),
  ]
};
