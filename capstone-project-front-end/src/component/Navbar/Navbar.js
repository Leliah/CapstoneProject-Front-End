import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/profile" className="nav-link">
        Profile
      </NavLink>
      <NavLink to="/" className="logo-link"> {/* Updated NavLink for the logo */}
      </NavLink>
    </nav>
  );
}

export default Navbar;
