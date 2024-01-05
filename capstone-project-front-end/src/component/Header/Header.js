import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './path-to-your-logo.png'; // Update the path accordingly

const Header = ({ showNav, setShowNav }) => {
  return (
    <header>
      <div className="menu">
        <MenuIcon onClick={() => setShowNav(!showNav)} />
        <div className="logo-container">
          <Link to="/">
            logo goes here
            {/* <img src={logo} className="logo1" alt="logo" /> */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;