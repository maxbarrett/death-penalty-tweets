const testrunner = require('qunit');

testrunner.run({
    log: {
        // log assertions overview
        assertions: true,

        // log expected and actual values for failed tests
        errors: true,

        // log tests overview
        tests: true,

        // log summary
        summary: true,

        // log global summary (all files)
        globalSummary: true,

        // log coverage
        coverage: true,

        // log global coverage (all files)
        globalCoverage: true,

        // log currently testing code file
        testing: true,
    },
    deps: [

    ],
    tests: "./test/tweet-test.js",
    code: "./components/Tweet.jsx",
    maxBlockDuration: 100000,
}, function(error, data) {
    console.log(error);
    console.log(data);
});
