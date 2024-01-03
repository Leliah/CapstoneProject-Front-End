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
  return (
    <div className={`navbar ${showNav ? 'active' : ''}`}>
      <ul>

        <li>
          <Link to='/profile'>
            <PersonIcon />
            HOME
          </Link>
        </li>
        <li>
          <Link to='/feed'>
            <GroupsIcon />
            FEED
          </Link>
        </li>
        <li>
          <Link to='/prompts'>
            <CalendarTodayIcon />
            PROMPTS
          </Link>
        </li>
        <li>
          <Link to='/roadmap'>
            <MapIcon />
            ROADMAP
          </Link>
        </li>
        <li>
          <Link to='/Signup'>
            <LoginIcon />
            LOGIN
          </Link>
        </li>
      </ul>
  <li>
    <Link to='/'>
      <CottageIcon />
      Cottage
    </Link>
  </li>
  <li>
    {/* Link to the Profile page */}
    <Link to='/profile'>
      <PersonIcon />
      Vision Board
    </Link>
  </li>
  <li>
    <Link to='/feed'>
      <GroupsIcon />
      Feed
    </Link>
  </li>
  <li>
    <Link to='/roadmap'>
      <MapIcon />
      Roadmap
    </Link>
  </li>
  <li>
    <Link to='/prompts'>
      <CalendarTodayIcon />
      Prompts
    </Link>
  </li>
  <li>
    <Link to='/Signup'>
      <LoginIcon />
      Signup
    </Link>
  </li>
  <li>
    <Link to='/about'>
      <GroupsIcon />
      About
    </Link>
  </li>
</ul>
    </div>
  );
}

export default Navbar;
