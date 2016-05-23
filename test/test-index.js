const testrunner = require('qunit');

function errorHandler(error) {
    if (error) {
        console.log(error);
    }
}

const maxBlockDuration = 100000;

const defaultLogConfig = {
    // log assertions overview
    assertions: false,

    // log expected and actual values for failed tests
    errors: true,

    // log tests overview
    tests: false,

    // log summary
    summary: false,

    // log global summary (all files)
    globalSummary: false,

    // log coverage
    coverage: false,

    // log global coverage (all files)
    globalCoverage: false,

    // log currently testing code file
    testing: false,
};

testrunner.run({
    log: defaultLogConfig,
    tests: "./test/loader-test.js",
    code: "./components/Loader.jsx",
    maxBlockDuration: maxBlockDuration,
}, errorHandler);

testrunner.run({
    log: defaultLogConfig,
    tests: "./test/notification-bar-test.js",
    code: "./components/NotificationBar.jsx",
    maxBlockDuration: maxBlockDuration,
}, errorHandler);

testrunner.run({
    log: defaultLogConfig,
    tests: "./test/tweet-test.js",
    code: "./components/Tweet.jsx",
    maxBlockDuration: maxBlockDuration,
}, errorHandler);

testrunner.run({
    log: defaultLogConfig,
    tests: "./test/tweets-test.js",
    code: "./components/Tweets.jsx",
    maxBlockDuration: maxBlockDuration,
}, errorHandler);

testrunner.run({
    log: {
        ...defaultLogConfig,
        errors: true,
        tests: true,
        globalSummary: true,
        coverage: true,
    },
    tests: "./test/tweets-app-test.js",
    code: "./components/TweetsApp.jsx",
    maxBlockDuration: maxBlockDuration,
}, errorHandler);
