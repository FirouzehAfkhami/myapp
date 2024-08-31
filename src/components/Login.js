import React from 'react';
import './Login.css'; 
import Loginmenu from './Loginmenu'; 
import Loginfooter from './Loginfooter'; 

function Login() {
  return (
    <div>
      <Loginmenu /> 
      <header className="login-header">
        <h2 className="login-title">Welcome to TORONTO Campus</h2>
        <h6 className="login-subtitle">Log in to view your courses, explore tools and features, and customize your eLearning experience.</h6>
      </header>
      <div className="container">
        <div className="left">
          <div className="login-form">
            <h2>Login</h2>
            <div className="picture">
              <img src="your-picture.jpg" alt="Picture" />
            </div>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
        <div className="right">
          <h1>Welcome to the Right Div</h1>
          <p>This is some content in the right div.</p>
        </div>
      </div>
      <Loginfooter /> 
    </div>
  );
}

export default Login;

