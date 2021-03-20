import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {SidebarData} from './SidebarData';

function Navbar() {
    return (
        <>
            <nav className='nav-menu'>
                <ul className='nav-menu-items'>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
