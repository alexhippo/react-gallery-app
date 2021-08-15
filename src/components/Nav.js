import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (

    <nav className="main-nav">
        <ul>
            <li><NavLink to='/munchkin-cats'>Munchkin Cats</NavLink></li>
            <li><NavLink to='/scottish-fold-cats'>Scottish Fold Cats</NavLink></li>
            <li><NavLink to='/british-short-hair-cats'>British Short Hair Cats</NavLink></li>
        </ul>
    </nav>
);

export default Nav;