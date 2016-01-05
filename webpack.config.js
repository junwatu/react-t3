 'use strict'

var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var js_dir = path.resolve(__dirname, 'js')
var build_dir = path.resolve(__dirname, 'build')
var view_dir = path.resolve(__dirname, 'html')

module.exports = {
  entry: path.resolve(js_dir, 'app.js'),
  output: { path: build_dir, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: [js_dir],
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: view_dir },
      { from: './node_modules/jquery/dist/jquery.min.js'}
    ])
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: build_dir
  }
}
