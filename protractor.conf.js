var HtmlReporter = require('protractor-beautiful-reporter');

// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/*.js'],
    SELENIUM_PROMISE_MANAGER: false,
    multiCapabilities: [{
        browserName: 'firefox'
      }, {
        browserName: 'chrome'
      }],
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        isVerbose: true
    },
    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'tmp/screenshots'
        }).getJasmine2Reporter());
     }
}

      