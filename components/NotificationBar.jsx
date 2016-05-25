'use strict';
import React from 'react';

const NotificationBar = props => {
    const count = props.count;
    const pluralise = count > 1;
    return (
        <div key="notification" className={'notification-bar' + (count > 0 ? ' active' : '')}>
            <p>
                There {(pluralise) ? 'are' : 'is'} {count} new tweet{(pluralise) ? 's' : ''}!&nbsp;
                <a className="show-new-tweets" href="#top" onClick={props.onShowNewTweets}>Click here to see {(pluralise) ? 'them' : 'it'}.</a>
            </p>
        </div>
    );
};

NotificationBar.propTypes = {
    count: React.PropTypes.number.isRequired,
    onShowNewTweets: React.PropTypes.func.isRequired,
};

module.exports = NotificationBar;
