import React from 'react';
import './InfoWithImage.css'; // Import the CSS file for styling

const InfoWithImage = () => {
  return (
    <div className="info-container">
      <div className="text-section">
        <h2>Is this program right for you?</h2>
        <p>Take our quick readiness quiz.</p>
        <p>The fun online quiz will take you less than 5 minutes to complete and will help us understand your career goals and the kind of setting where you would be most comfortable working.</p>
        <a href="#!" className="quiz-button">Take the quiz</a>
      </div>
      <div className="image-section">
        <img src={`${process.env.PUBLIC_URL}/images/th.png`} alt="Quiz Illustration" />
      </div>
    </div>
  );
};

export default InfoWithImage;
