import React from 'react';
import './TwoColumnForm.css'; // Import the CSS file

const TwoColumnForm = () => {
  return (
    <div className="two-column-form">
      {/* Left Form */}
      <div className="form-column left-form">
        <h2>Left Form</h2>
        <form>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          {/* Add more form fields here */}
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Right Form */}
      <div className="form-column right-form">
        <h2>Right Form</h2>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" />
          </div>
          {/* Add more form fields here */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TwoColumnForm;

