const path = require('path');
const webpack = require('webpack');

var config = {
  devtool: 'envify',
  entry: __dirname + "/client/index.jsx",

  output: {
    path:  __dirname + '/client/dist',
    filename: "bundle.js"
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
            presets: ['react', 'es2015', 'babel-preset-stage-0']
        }
    }
    ]
  }
};


module.exports = config;