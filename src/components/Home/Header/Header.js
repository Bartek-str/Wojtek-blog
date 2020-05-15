import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from "./Menu";

function Header() {
    return (
        <div className='header'>
            <FontAwesomeIcon icon={ faBars } className='hamburger-menu' />
            <Menu />
        </div>
    );
}

export default Header;