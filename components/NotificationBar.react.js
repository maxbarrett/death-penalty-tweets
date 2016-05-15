/** @jsx React.DOM */
'use strict';
const React = require('react');

const NotificationBar = function(props) {
    const count = props.count;
    return (
        <div className={"notification-bar" + (count > 0 ? 'active' : '')}>
            <p>
                There are {count} new tweets! 
                <a href="#top" onClick={props.onShowNewTweets}>Click here to see them.</a>
            </p>
        </div>
    );
};

NotificationBar.propTypes = {
    count: React.PropTypes.number.isRequired,
    onShowNewTweets: React.PropTypes.func.isRequired,
};

module.exports = NotificationBar;
