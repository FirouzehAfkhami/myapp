import React from 'react';
import './InfoSection.css'; // Import the CSS file for styling
import Accordion from './Accordion'; 
const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/images/th2.png`} alt="UI/UX Design" />
      </div>
      
      <div className="text-container">
     
        <p>
          A young woman works on her User Interface (UI) and User Experience (UX) Design Diploma at ABM College
        </p>
        
        
 <Accordion/>
      </div>
    </div>
  );
};

export default InfoSection;
