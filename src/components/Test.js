import React, { useState } from 'react';
import './Test.css'; // Import the CSS file for styling
import London from './London';
import Paris from './Paris';
import Tokyo from './Tokyo';
import Footer from './Footer'; // Import the Footer component

const Test = () => {
  // State to track the currently selected component
  const [currentView, setCurrentView] = useState('london');
  
  // State to manage submenu visibility
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  // Handle navigation item click
  const handleNavClick = (view) => {
    if (view === 'program') {
      setIsSubmenuOpen(prev => !prev); // Toggle submenu visibility on click
    } else {
      setCurrentView(view); // Set the current view if not 'program'
    }
  };

  // Handle mouse enter and leave events for "Program"
  const handleMouseEnter = () => {
    if (!isSubmenuOpen) {
      setCurrentView('paris'); // Change to 'paris' when hovered if submenu is not open
    }
  };

  const handleMouseLeave = () => {
    if (!isSubmenuOpen) {
      setCurrentView('london'); // Change back to default view if not hovered and submenu is not open
    }
  };

  // Handle hover and click for submenu items
  const handleSubmenuHover = (view) => {
    setCurrentView(view); // Change to the specified view on hover
  };

  const handleSubmenuClick = (view) => {
    setCurrentView(view); // Change to the specified view on click
    setIsSubmenuOpen(false); // Close the submenu after clicking
  };

  // Render the appropriate component based on the currentView state
  const renderContent = () => {
    switch (currentView) {
      case 'london':
        return <London />;
      case 'paris':
        return <Paris />;
      case 'tokyo':
        return <Tokyo />;
      default:
        return <London />;
    }
  };

  return (
    <div>
      <header>
       <p>Advanced Academy </p>
      </header>

      <section>
        <nav>
          <ul>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#!" onClick={() => handleNavClick('program')}>
                Program
              </a>
              {isSubmenuOpen && (
                <ul className="submenu">
                  <li
                    onMouseEnter={() => handleSubmenuHover('london')}
                    onClick={() => handleSubmenuClick('london')}
                  >
                    <a href="#!">Web Design and Development Diploma</a>
                  </li>
                  <li
                    onMouseEnter={() => handleSubmenuHover('paris')}
                    onClick={() => handleSubmenuClick('paris')}
                  >
                    <a href="#!">Software Development Diploma</a>
                  </li>
                  <li
                    onMouseEnter={() => handleSubmenuHover('tokyo')}
                    onClick={() => handleSubmenuClick('tokyo')}
                  >
                    <a href="#!">Cybersecurity Diploma</a>
                  </li>
                </ul>
              )}
            </li>
            {/* Other main menu items can go here */}
          </ul>
        </nav>
        
        <article>
          {renderContent()}
        </article>
      </section>

      <Footer />
    </div>
  );
};

export default Test;
