'use strict';
import React from 'react';

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

export default Loader;
