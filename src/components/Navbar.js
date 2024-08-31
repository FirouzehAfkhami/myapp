import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/About' },
    { text: 'Contact', link: '/Contact' },
    { text: 'Login', link: '/LoginModal' },
  ];

  return (
    <nav style={navStyle}>
      <ul style={menuStyle}>
        {menuItems.map((item, index) => (
          <li key={index} style={menuItemStyle}>
            <Link to={item.link} style={linkStyle}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60px', // Adjust height as needed
  backgroundColor: '#333', // Example background color
};

const menuStyle = {
  display: 'flex',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};

const menuItemStyle = {
  margin: '0 20px', // Adjust spacing between menu items
};

const linkStyle = {
  color: '#fff', // Example text color
  textDecoration: 'none',
};

export default Navbar;
