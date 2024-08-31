import React from 'react';
import './London.css'; // Import the CSS file for styling
import InfoWithImage from './InfoWithImage'; // Import the InfoWithImage component

import InfoSection from './InfoSection';
import ThreeColumns from './ThreeColumns';
const London = () => { 
  return (
    <div>
      <div className="full-screen-container">
        <div className="centered-container">
        <div className="background-image"></div>
      <div className="content">
    
    <div className="image-container">
    <img 
  src={`${process.env.PUBLIC_URL}/images/th3.png`} 
  alt="Description" 
  style={{ maxHeight: '80%' }} 
/>

    </div>
   
      </div>
        
            <h1>UI/UX Design Diploma</h1>
            
         
          <InfoWithImage />
          <InfoSection/>
          <ThreeColumns />
        </div>
      </div>
      
     
    </div>
  );
};

export default London;

