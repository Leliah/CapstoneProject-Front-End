import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./component/Home Page/Home";
import Signup from "./component/Signup/Signup";
import AboutPage from "./component/About/About";
import Navbar from "./component/Navbar/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "./component/Footer/Footer";
import Profile from "./component/Profile/Profile"; // Import the Profile component
import logo from "./component/logo1.png"; // Update the path accordingly
import Login from "./component/Login/Login"

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Router>
      <div className="App">
        <header>
          <div className="menu">
            <MenuIcon onClick={() => setShowNav(!showNav)} />
            <div className="logo-container">
              <img src={logo} className="logo1" alt="logo" />
            </div>
          </div>

          <div className={`sidenav ${showNav ? "active" : ""}`}>
          </div>
        </header>
        <Navbar show={showNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes for other components/pages */}
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
