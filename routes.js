'use strict';
require('babel-register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const tweetsApp = React.createFactory(require('./components/TweetsApp'));
const Tweet = require('./models/Tweet');

module.exports = {
    index: function(req, res) {
        // Call static model method to get tweets in the db
        Tweet.getTweets(0, 0, function(tweets, pages) {
            // Render React to a string, passing in our fetched tweets
            const markup = ReactDOMServer.renderToString(
                tweetsApp({
                    tweets: tweets,
                })
            );

            // Render our 'home' template
            res.render('home', {
                markup: markup, // Pass rendered react markup
                state: JSON.stringify(tweets), // Pass current state to client side
            });
        });
    },

    page: function(req, res) {
        // Fetch tweets by page via param
        Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {
            // Render as JSON
            res.send(tweets);
        });
    },
};
