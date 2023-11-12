import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Signup.css'; // Import the CSS file for styling
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [isUser, setIsUser] = useState(false); // Flag to check if the user has an account

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here
    // For demonstration purposes, simply set the isUser flag to true
    setIsUser(true);
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
  };

  const handleLogin = () => {
    // Implement your login logic here
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
            className="password-toggle"
            onClick={togglePasswordVisibility}
            type="button"
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </div>
        <button className="signup-button" onClick={handleSignUp}>
          Sign up
        </button>
        {!isUser && <p>You are not a user. Please sign up.</p>}

        <div className="signup-links">
          <Link to="/forgot-password" className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </Link>
          <span className="separator"> | </span>
          <Link to="/login" className="login" onClick={handleLogin}>
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
