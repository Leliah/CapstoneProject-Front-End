import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file for styling

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <h1>Start Your Journey</h1>
      <form className="signup-form">
        <input type="text" placeholder="Name" className="signup-input" />
        <input type="email" placeholder="Email" className="signup-input" />
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="password-input" // Add a specific class for the password input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={`password-toggle ${showPassword ? 'show' : ''}`}
            onClick={togglePasswordVisibility}
            type="button"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button className="signup-button">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
