import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import CottageIcon from '@mui/icons-material/Cottage';
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import LoginIcon from '@mui/icons-material/Login';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function Navbar() {
  const [isFullWidth, setIsFullWidth] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsFullWidth(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isFullWidth) {
    return null; // Return null to not render the Navbar in mobile version
  }

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to='/'>
            <CottageIcon />
          </Link>
        </li>
        <li>
          <Link to='/'>
            <PersonIcon />
          </Link>
        </li>
        <li>
          <Link to='/'>
            <MapIcon />
          </Link>
        </li>
        <li>
          <Link to='/'>
            <CalendarTodayIcon />
          </Link>
        </li>
        <li>
          <Link to='/Signup'>
            <LoginIcon />
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <GroupsIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
