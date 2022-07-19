import React from 'react';
import {NavLink} from 'react-router-dom';

import "./Header.css";

const Header = () => {
    return (
        <header>
            <NavLink to={'/'} activeclassname='active'>Home</NavLink>
            <NavLink to={'/chats'} activeclassname='active'>Chats</NavLink>
            <NavLink to={'/profile'} activeclassname='active'>Profile</NavLink>
            <NavLink to={'/posts'} activeclassname='active'>Posts (API)</NavLink>
            <hr/>
        </header>
    );
};

export default Header;