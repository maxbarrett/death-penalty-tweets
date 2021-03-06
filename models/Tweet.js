'use strict';
const mongoose = require('mongoose');

// Create a new schema for our tweet data
const schema = new mongoose.Schema({
    twid: String,
    twid_str: String,
    active: Boolean,
    author: String,
    avatar: String,
    body: String,
    date: Date,
    screenname: String,
});

const TWEETS_PER_PAGE = 10;
let Tweet;

// Create a static getTweets method to return tweet data from the db
schema.statics.getTweets = function(page, skip, callback) {

    let tweets = [];
    const start = (page * TWEETS_PER_PAGE) + (skip * 1);

    // Query the db, using skip and limit to achieve page chunks
    Tweet.find({}, 'twid active author avatar body date screenname twid_str', { skip: start, limit: 10 }).sort({ date: 'desc' }).exec(function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            tweets = docs;  // We got tweets
            tweets.forEach(function(tweet) {
                tweet.active = true; // Set them to active
            });
        }

        // Pass them back to the specified callback
        callback(tweets);
    });
};

// Return a Tweet model based upon the defined schema
module.exports = Tweet = mongoose.model('Tweet', schema);

