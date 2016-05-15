/** @jsx React.DOM */

const React = require('react');
const Tweet = require('./Tweet.react.js');

const Tweets = function(props) {
    // Render our tweets
    // Build list items of single tweet components using map
    const content = props.tweets.map(function(tweet) {
        return (<Tweet key={tweet.twid_str} tweet={tweet} />);
    });

    // Return ul filled with our mapped tweets
    return (<ul className="tweets">{content}</ul>);
};

Tweets.propTypes = {
    tweets: React.PropTypes.array.isRequired,
};

module.exports = Tweets;
