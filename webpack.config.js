const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

var npmRoot = __dirname + "/node_modules";
var appDir = __dirname + "/src";

const isThemeEnabled = process.env.WEBPACK_THEME || false;
const default_alias = {
  theme: './scss/theme.scss',
  hero: './hero/hero',
  navbar: './navbar/navbar',
  user: './user/user',
  home: './home/home',
  new: './new/new'
}

module.exports = {
  entry: "./src/main",
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', '.ts'],
    alias: isThemeEnabled ? merge(default_alias, require('./src/themes/'+process.env.WEBPACK_THEME).alias) : default_alias
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.WEBPACK_THEME': JSON.stringify(process.env.WEBPACK_THEME || false)
    }),
  ],
  module: {
    loaders: [
      {test: /.ts$/, loader: 'ts', query: {compilerOptions: {noEmit: false}}},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
    ],
    noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
  },
  devServer: {
    contentBase: 'src',
    historyApiFallback: true
  },
  devtool: 'source-map',
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src'), path.resolve(__dirname, '/node_modules/bootstrap')]
  },
};
