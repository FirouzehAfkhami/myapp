import React from 'react';
import './Test2.css'; 
import Test2header from './Test2header';

function Test2() {
  return (
    <div className="App3">
     <Test2header/>
      
      <main>
        <section className="section3" id="navigation">
          
        </section>
        
        <section className="section3" id="menu">
         
        </section>
        
        <section id="about">
          <h2 className="h22">About Us</h2>
          <p className="p22">Welcome to Brewed Awakening: Your Neighborhood Coffee Haven</p>
        </section>

        {/* <section className="section4" id="contact">
          <h2 className="h22">Contact Us</h2>
          <form className="form3" id="contactForm">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Send</button>
          </form>
        </section>
         */}
        
      </main>

      <footer className="footer3">
        <p>&copy; 2024 Café Local. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Test2;

