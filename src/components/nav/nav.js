import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/nav.css';
// , { Component }

function Nav(){
    return <nav className="nav" >
        <ul>
            <li>
                <NavLink to='/home' >首页</NavLink>
            </li>
            <li>
                <NavLink to='/ryf' >阮一峰demo</NavLink>
            </li>
            <li>
                <NavLink to='/about' >about</NavLink>
            </li>
        </ul>
    </nav>
}
 
export default Nav;