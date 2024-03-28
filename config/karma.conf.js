module.exports = function(config) {
  config.set({
    basePath: '../',

    files: [
      'app/lib/angular-1.2.32/angular.js',
      'app/lib/angular-1.2.32/angular-*.js',
      'app/lib/iso-3166-country-codes-angular/*.js',
      'test/lib/angular-1.2.32/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-jasmine-html-reporter'
    ],

    junitReporter: {
       outputDir: 'test_out',
      outputFile: 'results.xml'
    },

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
  });

  if (process.env.TRAVIS) {
    config.browsers = ['Chrome_travis_ci'];
    config.singleRun = true;
  }
}
