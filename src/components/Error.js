import React from 'react';
import PropTypes from 'prop-types';


const Error = (props) => (
    <div className="error">
        <h2>{props.error}<span role='img' aria-label="cat sad">&#x1F63F;</span></h2>
    </div>
);

Error.propTypes = {
    error: PropTypes.string,
}

export default Error;