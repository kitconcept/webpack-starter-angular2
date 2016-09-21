module.exports = function(config) {
  config.set({
    browsers     : ['Chrome'],
    frameworks   : ['jasmine'],
    reporters    : ['mocha', 'junit'],
    singleRun    : true,
    preprocessors: {'./karma-test-runner.js': ['webpack']},
    files        : [{pattern: './karma-test-runner.js', watched: false}],
    webpack      : require('./webpack.config.js'),
    webpackServer: {noInfo: true}
  });
};
