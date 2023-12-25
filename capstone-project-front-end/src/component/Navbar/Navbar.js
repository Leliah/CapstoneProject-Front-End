// Navbar.js
import './Navbar.css';
import { Link } from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';
import LoginIcon from '@mui/icons-material/Login';
import React, { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import CottageIcon from '@mui/icons-material/Cottage';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function Navbar({ showNav }) {
  // ... (unchanged code)

  return (
    <div className={`navbar ${showNav ? 'active' : ''}`}>
      <ul>
        <li>
          <Link to='/'>
            <CottageIcon />
            Home
          </Link>

          <Link to='/roadmap'>
            <MapIcon/>
            Road Map
          </Link>

          <Link to='/signup'>
            <LoginIcon/>
            Login
          </Link>
          <Link to='/profile'>
            <PersonIcon/>
            Profile
          </Link>
          <Link to='/prompts'>
            <CalendarTodayIcon/>
            Daily Prompts
          </Link>
        </li>
        {/* ... (other menu items) */}
      </ul>
    </div>
  );
}

export default Navbar;
