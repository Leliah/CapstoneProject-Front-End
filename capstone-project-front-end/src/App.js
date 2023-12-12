import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./component/Home Page/Home";
import Signup from "./component/Signup/Signup";
import AboutPage from "./component/About/About";
import Navbar from "./component/Navbar/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "./component/Footer/Footer";
import logo from "./component/logo1.png"; // Update the path accordingly
import Feed from "./component/Feed/Feed";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Router>
      <div className="App">
        <header>
          <div className="menu">
            <MenuIcon onClick={() => setShowNav(!showNav)} />
          </div>
          <div className={`sidenav ${showNav ? 'active' : ''}`}>
            <img src={logo} className="logo1" alt="logo" />
            <ul>
              <li>
                <Link to="/" onClick={() => setShowNav(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/signup" onClick={() => setShowNav(false)}>
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setShowNav(false)}>
                  About
                </Link>
              </li>
              {/* Add more links for other components/pages */}
            </ul>
          </div>
        </header>
        <Navbar show={showNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/feed" element={<Feed />} />
          {/* Add more routes for other components/pages */}
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
