const path = require('path');
const webpack = require('webpack');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: 'src',
    historyApiFallback: true,
    host: 'localhost',
    port: 3000
  },
  entry: {
    'main'  : './src/main.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: ['src', 'node_modules'],
  },
  module: {
    // preLoaders: [
    //     {
    //         test: /\.ts$/,
    //         loader: "tslint"
    //     }
    // ],
    loaders: [
      {test: /.ts$/, loader: 'ts-loader', query: {compilerOptions: {noEmit: false}}},
    ],
    // noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        resolve: {},
        tslint: {
          emitErrors: false,
          failOnHint: false,
          resourcePath: 'src',
          configuration: require('./tslint.json')
        },
      }
    }),
    /*
     * Plugin: HtmlWebpackPlugin
     * Description: Simplifies creation of HTML files to serve your webpack bundles.
     * This is especially useful for webpack bundles that include a hash in the filename
     * which changes every compilation.
     *
     * See: https://github.com/ampedandwired/html-webpack-plugin
     */
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),
    /**
     * Plugin: ContextReplacementPlugin
     * Description: Provides context to Angular's use of System.import
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
     * See: https://github.com/angular/angular/issues/11580
     */
    new ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.resolve(__dirname, 'src')
    ),
  ],
  devServer: {
    contentBase: 'src',
    historyApiFallback: true
  },
  devtool: 'source-map'
};
