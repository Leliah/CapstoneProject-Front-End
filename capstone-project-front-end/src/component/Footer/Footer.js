import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";

function Footer() {
  return (
    <footer className="footer">
      {/* Your footer content goes here */}
      <ul>
        <li className="footer-item">
          <Link to="/about">
            <GroupsIcon />
            Meet The Team
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/contact">
            <GroupsIcon />
            Contact Us
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/privacy">
            <GroupsIcon />
            Privacy Policy
          </Link>
        </li>
      </ul>

      <p>123 Main Street, Cityville, Country</p>
      <p>Email: info@example.com</p>

      © 2023 MindfulMe
    </footer>
  );
}

export default Footer;
