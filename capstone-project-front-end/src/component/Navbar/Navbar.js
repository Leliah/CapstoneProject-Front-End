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

  return (
    <div className={`navbar ${showNav ? 'active' : ''}`}>
  {/* <li>
  
    <Link to='/profile'>
      <PersonIcon className='navbar-icon'/>
      Vision Board
    </Link>
  </li> */}
  <li>
    <Link to='/feed'>
      <GroupsIcon className='navbar-icon' />
      Feed
    </Link>
  </li>
  <li>
    <Link to='/roadmap'>
      <MapIcon  className='navbar-icon'/>
      Roadmap
    </Link>
  </li>
  <li>
    <Link to='/prompts'>
      <CalendarTodayIcon  className='navbar-icon'/>
      Prompts
    </Link>
  </li>
  {/* <li>
    <Link to='/Signup'>
      <LoginIcon  className='navbar-icon'/>
      Signup
    </Link>
  </li> */}
  {/* <li>
    <Link to='/about'>
      <GroupsIcon  className='navbar-icon'/>
      About
    </Link>
  </li> */}

    </div>
  );
}


export default Navbar;

export default Navbar;

