const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    
    './client/app.js'
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
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
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
      template: 'app/index.template.html',
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
        "BASE_URL": JSON.stringify(process.env.BASE_URL.toString()),
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
