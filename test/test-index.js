import QUnit from 'qunit';

QUnit.setup({
    log: {
        // log assertions overview
        assertions: false,
        // log expected and actual values for failed tests
        errors: true,
        // log tests overview
        tests: true,
        // log summary
        summary: false,
        // log global summary (all files)
        globalSummary: true,
        // log coverage
        coverage: true,
        // log global coverage (all files)
        globalCoverage: true,
        // log currently testing code file
        testing: true,
    },
    maxBlockDuration: 5000,
});


QUnit.run({
    code: './components/',
    tests: [
        './test/loader-test.js',
        './test/notification-bar-test.js',
        './test/tweet-test.js',
        './test/tweets-app-test.js',
        './test/tweets-test.js',
    ],
}, (err, report) => {
    console.log(report);
    console.log(err);
});
