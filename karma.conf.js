module.exports = function(config) {
  config.set({
    browsers     : ['Chrome'],
    frameworks   : ['jasmine'],
    reporters    : ['mocha', 'junit', 'coverage'],
    singleRun    : true,
    preprocessors: {'./karma-test-runner.js': ['webpack', 'coverage', 'sourcemap']},
    files        : [{pattern: './karma-test-runner.js', watched: false}],
    webpack      : require('./webpack.config.js'),
    webpackServer: {noInfo: true},
    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json' },
        { type: 'html' }
      ]
    },
  });
};
