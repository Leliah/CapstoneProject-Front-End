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

function Navbar() {
  const [isFullWidth, setIsFullWidth] = useState(window.innerWidth > 768);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsFullWidth(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavToggle = () => {
    setShowNav(!showNav);
  };

  if (!isFullWidth) {
    return null;
  }

  return (
    <div className={`navbar ${showNav ? 'active' : ''}`}>
      <div className="menu-icon" onClick={handleNavToggle}>

      </div>
      <ul>
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
      Profile
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







