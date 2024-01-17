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
             Creators
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
      © 2023 MindfulMe
    </footer>
  );
}

export default Footer;
