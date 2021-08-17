import React from 'react';

const Error = (props) => (
    <div className="error">
        <h2>{props.error}<span role='img' aria-label="cat sad">&#x1F63F;</span></h2>
    </div>
);

export default Error;