import React, { useState } from 'react';
import './Test2header.css'; // Make sure to create this CSS file

function Test2header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Café Local</h1>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#test">Test</a></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Test2header;