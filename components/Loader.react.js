/** @jsx React.DOM */
'use strict';
const React = require('react');

const Loader = function(props) {
    return (
        <div className={"loader " + (props.paging ? 'active' : "")}>
            <img src="svg/loader.svg" />
        </div>
    );
};

Loader.propTypes = {
    paging: React.PropTypes.bool.isRequired,
};

module.exports = Loader;
