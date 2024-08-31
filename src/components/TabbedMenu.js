import React, { useState } from 'react';
import './TabbedMenu.css'; // Import your CSS file if you have one

const TabbedMenu = () => {
  // State to manage the currently active tab
  const [activeTab, setActiveTab] = useState('AboutUs');

  // Function to handle tab clicks
  const openTab = (tabName, color) => {
    setActiveTab(tabName);
    document.documentElement.style.setProperty('--tab-color', color);
  };

  return (
    <div>
      <p>Click on the buttons inside the tabbed menu:</p>

      <div
        id="AboutUs"
        className={`tabcontent ${activeTab === 'AboutUs' ? 'active' : ''}`}
        style={{ backgroundColor: 'lightblue' }}
      >
        <h1>About Us</h1>
        <p>Welcome to our coffee shop! We are dedicated to bringing you the finest coffee and a cozy atmosphere.</p>
      </div>

      <div
        id="ContactUs"
        className={`tabcontent ${activeTab === 'ContactUs' ? 'active' : ''}`}
        style={{ backgroundColor: 'lightgreen' }}
      >
        <h1>Contact Us</h1>
        <form id="contactForm">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Send</button>
        </form>
      </div>

      <div
        id="Menu"
        className={`tabcontent ${activeTab === 'Menu' ? 'active' : ''}`}
        style={{ backgroundColor: 'lightcoral' }}
      >
        <h1>Menu</h1>
        <ul>
          <li>Coffee - $3</li>
          <li>Tea - $2</li>
          <li>Pastries - $5</li>
        </ul>
      </div>

      <button
        className="tablink"
        onClick={() => openTab('AboutUs', 'lightblue')}
        style={{ backgroundColor: activeTab === 'AboutUs' ? 'grey' : '' }}
      >
        About Us
      </button>
      <button
        className="tablink"
        onClick={() => openTab('ContactUs', 'lightgreen')}
        style={{ backgroundColor: activeTab === 'ContactUs' ? 'grey' : '' }}
      >
        Contact Us
      </button>
      <button
        className="tablink"
        onClick={() => openTab('Menu', 'lightcoral')}
        style={{ backgroundColor: activeTab === 'Menu' ? 'grey' : '' }}
      >
        Menu
      </button>
    </div>
  );
};

export default TabbedMenu;
