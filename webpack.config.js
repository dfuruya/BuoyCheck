const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'client'),
  devtool: 'inline-sourcemap',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader'
      // },
      // {
      //   test: /\.png$/,
      //   loader: 'url-loader?limit=100000'
      // },
      // {
      //   test: /\.jpg$/,
      //   loader: 'file-loader'
      // },
      // {
      //   test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url?limit=10000&mimetype=application/font-woff'
      // },
      // {
      //   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url?limit=10000&mimetype=application/octet-stream'
      // },
      // {
      //   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'file'
      // },
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url?limit=10000&mimetype=image/svg+xml'
      // },
    ],
  },
};
