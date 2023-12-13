import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './Login.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUser, setIsUser] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Implement your login logic here
    // For demonstration purposes, simply set the isUser flag to true
    setIsUser(true);
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="password-input"
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
        <button className="login-button" onClick={handleLogin}>
          Log In
        </button>
        {!isUser && (
          <p className="not-user">
            Invalid credentials. Please check your username and password.
          </p>
        )}

        <div className="login-links">
          <Link
            to="/forgot-password"
            className="forgot-password"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </Link>
          <span className="separator"> | </span>
          <Link to="/signup" className="signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
