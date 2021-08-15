import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => (
    <div className="page-not-found">
        <h2>404: Page Not Found <span role='img' aria-label="cat crying">&#x1F63F;</span></h2>
        <p>Sorry, we couldn't find that page.</p>
        <ul>
            <li><NavLink to="/">Back to Home</NavLink></li>
        </ul>
    </div>
);

export default PageNotFound;