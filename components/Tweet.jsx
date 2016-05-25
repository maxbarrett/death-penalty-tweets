'use strict';
import React from 'react';

const Tweet = function(props) {
    const tweet = props.tweet;
    return (
        <li className={'tweet' + (tweet.active ? ' active' : '')} key={tweet.twid_str}>
            <img src={tweet.avatar} className="avatar" />
            <blockquote>
                <cite>
                    <a target="_blank" href={"http://www.twitter.com/" + tweet.screenname + (tweet.twid_str ? '/status/' + tweet.twid_str : '')}>{tweet.author}</a> 
                    <span className="screen-name">@{tweet.screenname}</span> 
                </cite>
                <span className="content">{tweet.body}</span>
            </blockquote>
        </li>
    );
};

Tweet.propTypes = {
    tweet: React.PropTypes.object.isRequired,
};

export default Tweet;
