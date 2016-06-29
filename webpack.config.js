const path = require('path');
const webpack = require('webpack');

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
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {test: /.ts$/, loader: 'ts', query: {compilerOptions: {noEmit: false}}}
    ],
    noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
  },
  tslint: {
    emitErrors: true,
    failOnHint: true
  },
  devServer: {
    contentBase: 'src',
    historyApiFallback: true
  },
  devtool: 'source-map'
};
