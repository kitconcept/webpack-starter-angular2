[![Build Status](https://travis-ci.org/kitconcept/webpack-starter-angular2.svg?branch=master)](https://travis-ci.org/kitconcept/webpack-starter-angular2)

# Webpack Starter Angular 2

Minimalistic seed project to get started with Angular 2, TypeScript and Webpack.

## Software Stack

- Angular 2 (final)
- Webpack 2
- TypeScript
- TsLint
- Karma, Mocha

## Prerequisits

Install webpack:

    $ npm install -g webpack

## Usage

Checkout repository:

    $ git clone https://github.com/kitconcept/webpack-starter-angular2.git
    $ cd webpack-starter-angular2

Install dependencies:

    $ npm install

Start development server:

    $ npm start


## Testing

Install Dependencies:

  $ npm install karma karma-chrome-launcher karma-firefox-launcher karma-jasmine karma-mocha-reporter karma-webpack jasmine-core @types/es6-shim @types/jasmine --save-dev

package.json:

  "test": "karma start karma.conf.js"


More details: https://github.com/Farata/angular2typescript/tree/master/chapter10/angular2-webpack-starter

## Linting

Install tslint and tslint-loader:

  $ npm install tslint tslint-loader --save-dev

Create initial configuration file:

  $ node_modules/tslint/bin/tslint init

Configure tslint-loader (webpack.config.js):

    preLoaders: [
        {
            test: /\.ts$/,
            loader: "tslint"
        }
    ],
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
Install pre-commit hook:

  $ npm install --save-dev pre-commit

Configure pre-commit hook (package.json):

  "pre-commit": [
    "lint"
  ],

## Tools

### Sublime Text 3

https://github.com/Microsoft/TypeScript-Sublime-Plugin

### Resources

- Code samples from the book Angular 2 Development with TypeScript: https://github.com/Farata/angular2typescript
- AngularClass starter kit: https://github.com/AngularClass/angular2-webpack-starter
