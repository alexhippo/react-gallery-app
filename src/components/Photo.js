import React from 'react';

const url = "https://live.staticflickr.com/"

const Photo = (props) => (
    <li>
        <img src={`${url}${props.server}/${props.id}_${props.secret}.jpg`} alt="" />
    </li>
);

export default Photo;