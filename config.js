'use strict';
// get from: https://apps.twitter.com/
const twitter = {
    consumer_key: process.env.TWITTER_consumer_key || 'p2RYrckOGPxfvFJQezpwadLbk',
    consumer_secret: process.env.TWITTER_consumer_secret || 'YjKQatqIu7CYkZNWb8Z5UNMviw3xeNffFOQUn9n7ToObh7QEim',
    access_token_key: process.env.TWITTER_access_token_key || '119724047-ZkPXMS2O8UENHzmXuXz5gaibN61xdfL34AflME1R',
    access_token_secret: process.env.TWITTER_access_token_secret || 'a039ieRzSh7TwNusUOWu6HEteOWtQXq1H2AtYaquL7vR9',
};

// your email address & password
const emailAuth = {
    user: 'me@example.com',
    pass: 'password1',
};

exports.twitter = twitter;
exports.emailAuth = emailAuth;
