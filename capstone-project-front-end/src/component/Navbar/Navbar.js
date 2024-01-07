// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import CottageIcon from '@mui/icons-material/Cottage';
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import LoginIcon from '@mui/icons-material/Login';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function Navbar({ showNav }) {
  return (
    <div className={`navbar ${showNav ? 'active' : ''}`}>
  <li>
    <Link to='/feed'>
      Feed
    </Link>
  </li>
  <li>
    <Link to='/roadmap'>
      Roadmap
    </Link>
  </li>
  <li>
    <Link to='/prompts'>
      Prompts
    </Link>
  </li>
    </div>
  );
}

export default Navbar;


