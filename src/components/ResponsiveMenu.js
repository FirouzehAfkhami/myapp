import React, { useState } from 'react';
import './ResponsiveMenu.css'; // Import the CSS file for styling

const ResponsiveMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-container">
            <div className="menu-toggle" onClick={toggleMenu}>
                <span>&#9776;</span> {/* Hamburger icon */}
            </div>
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li className="logo-item">
                    <a href="/">
                        <h3>Advanced Academy</h3>
                    </a>
                </li>
                <li className="menu-items">
                    <a href="#">Program</a>
                    <ul className="submenu">
                        <li><a href="/UI/UX Diploma">UI/UX Design Diploma</a></li>
                        <li><a href="/Cybersecurity Diploma">Cybersecurity Diploma</a></li>
                        <li><a href="/Mobile App Developer Diploma">Mobile App Developer Diploma</a></li>
                    </ul>
                </li>
                <li className="menu-items dropdown">
                    <a href="#">Login</a>
                    <ul className="submenu">
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default ResponsiveMenu;
