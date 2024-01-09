// Footer.js
import "./Footer.css"
import { Link } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li className="footer-item">
          <Link to="/about">
            <GroupsIcon className="footer-icon" />
            About
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/contact">
            <GroupsIcon className="footer-icon" />
            Contact Us
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/privacy">
            <GroupsIcon className="footer-icon" />
            Privacy Policy
          </Link>
        </li>
      </ul>
      <p>© 2023 MindfulMe</p>
    </footer>
  );
}

export default Footer;
