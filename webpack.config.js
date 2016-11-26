const path = require('path');
const webpack = require('webpack');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var entry = {
    main: ['./src/main.ts']
};

let styles = [
  './node_modules/material-design-lite/material.css'
]
let scripts = [
]

styles = styles.map(function (style) { return path.resolve(style); })
scripts = scripts.map(function (script) { return path.resolve(script); })

// Only add styles/scripts if there's actually entries there
if (styles.length > 0) {
    entry['styles'] = styles;
}
if (scripts.length > 0) {
    entry['scripts'] = scripts;
}

module.exports = {
  debug: true,
  devServer: {
    contentBase: 'src',
    historyApiFallback: true,
    host: 'localhost',
    port: 3000
  },
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',

  },
  resolve: {
    extensions: ['', '.ts', '.js', '.css'],
  },
  module: {
    // preLoaders: [
    //     {
    //         test: /\.ts$/,
    //         loader: "tslint"
    //     }
    // ],
    loaders: [
      {test: /.ts$/, loader: 'ts', query: {compilerOptions: {noEmit: false}}},
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        exclude: styles,
        test: /\.css$/,
        loaders: ['raw-loader', 'css-loader']
      },
      {
        include: styles,
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
    ],
    noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
  },
  // more options in the optional tslint object
  tslint: {
    configuration: {
      rules: {
        quotemark: [true, "double"]
      }
    },

    // tslint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: false,

    // tslint does not interrupt the compilation by default
    // if you want any file with tslint errors to fail
    // set failOnHint to true
    failOnHint: true,

    // These options are useful if you want to save output to files
    // for your continuous integration server
    fileOutput: {
      // The directory where each file's report is saved
      dir: "./tslint-report/",

      // The extension to use for each report's filename. Defaults to "txt"
      ext: "xml",

      // If true, all files are removed from the report directory at the beginning of run
      clean: true,

      // A string to include at the top of every report file.
      // Useful for some report formats.
      header: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<checkstyle version=\"5.7\">",

      // A string to include at the bottom of every report file.
      // Useful for some report formats.
      footer: "</checkstyle>"
    }
  },
  plugins: [
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
