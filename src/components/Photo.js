import React from 'react';
import PropTypes from 'prop-types';

const url = "https://live.staticflickr.com/"

const Photo = (props) => (
    <li>
        <img src={`${url}${props.server}/${props.id}_${props.secret}.jpg`} alt={`${props.title}`} />
    </li>
);

Photo.propTypes = {
    server: PropTypes.string,
    id: PropTypes.string,
    secret: PropTypes.string,
    title: PropTypes.string
}

export default Photo;