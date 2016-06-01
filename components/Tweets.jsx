'use strict';
import React from 'react';
import Tweet from './Tweet';

const Tweets = function(props) {
    // Build list items of single tweet components using map
    const content = props.tweets.map(function(tweet) {
        return (<Tweet key={tweet.twid_str} tweet={tweet} />);
    });

    // Return list filled with mapped tweets
    return (<ul className="tweets">{content}</ul>);
};

Tweets.propTypes = {
    tweets: React.PropTypes.array.isRequired,
};

export default Tweets;
