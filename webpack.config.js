const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/main",
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {test: /.ts$/, loader: 'ts', query: {compilerOptions: {noEmit: false}}}
    ],
    noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'src/index.html'
    })
  ],
  devServer: {
    contentBase: 'src',
    historyApiFallback: true
  },
  devtool: 'source-map'
};
