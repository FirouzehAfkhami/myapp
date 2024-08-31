import React, { useState } from 'react';
import './Accordion.css'; // Import the CSS file for styling

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
      <h3>Admission Requirements</h3>
        <button 
          className={`accordion-button ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleToggle(0)}
        >
          Standard Admission
        </button>
        {activeIndex === 0 && (
          <div className="accordion-content">
            <ul className="requirements-list">
          <li>Successful completion of Grade 12 or equivalent.</li>
          <li>Passing score on the Wonderlic Scholastic Level Exam.</li>
          <li>Passing score on the Accuplacer Test.</li>
          <li>Successful interview with ABM College Admissions.</li>
        </ul>
          </div>
        )}
      </div>
      <div className="accordion-item">
        <button 
          className={`accordion-button ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleToggle(1)}
        >
          Mature Admission
        </button>
        {activeIndex === 1 && (
          <div className="accordion-content">
           <ul className="requirements-list">
        <li>Applicants must be out of high school for at least two years.</li>
        <li>Applicants must be at least 18 years of age prior to admission.</li>
        <li>Passing score on the Wonderlic Scholastic Level Exam.</li>
        <li>Passing score on the Accuplacer Test.</li>
        <li>Successful interview with ABM College Admissions.</li>
      </ul>
          </div>
        )}
      </div>
      <div className="accordion-item">
        <button 
          className={`accordion-button ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => handleToggle(2)}
        >
          Detailed & International Requirements
        </button>
        {activeIndex === 2 && (
          <div className="accordion-content">
            <p>For any other program or region-specific requirements, please contact one of our Admissions Advisors. For International Students, please refer to the International Students Admission Requirements.

</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
