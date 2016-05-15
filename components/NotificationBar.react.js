/** @jsx React.DOM */
'use strict';
const React = require('react');

const NotificationBar = function(props) {
    const count = props.count;
    return (
        <div key="notification" className={"notification-bar" + (count > 0 ? ' active' : '')}>
            <p>
                There {(count > 1) ? 'are' : 'is'} {count} new tweet{(count > 1) ? 's' : ''}!&nbsp;
                <a href="#top" onClick={props.onShowNewTweets}>Click here to see {(count > 1) ? 'them' : 'it'}.</a>
            </p>
        </div>
    );
};

NotificationBar.propTypes = {
    count: React.PropTypes.number.isRequired,
    onShowNewTweets: React.PropTypes.func.isRequired,
};

module.exports = NotificationBar;
