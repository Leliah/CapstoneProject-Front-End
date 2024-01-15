import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./component/Home Page/Home";
import Signup from "./component/Signup/Signup";
import AboutPage from "./component/About/About";
import Navbar from "./component/Navbar/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "./component/Footer/Footer";
import Profile from "./component/Profile/Profile";
import logo from "./component/logo1.png";
import RoadMapWrapper from "./component/RoadMap/Wrapper";
import Prompts from "./component/Prompts/Prompts";
import PromptsResponse from "./component/Prompts/PromptsResponse";
import Feed from "./component/Feed/Feed";
import Login from "./component/Login/Login";
import PromptsWorkedOn from "./component/Prompts/PromptsWorkedOn";
// import background from "./component/background.png";
import PromptsWorkedOn from "./component/Prompts/PromptsWorkedOn"

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Router>
      <div className="App">
          
        <header className="header">
          <div className="menu">
            <MenuIcon onClick={() => setShowNav(!showNav)} />
            <Link to="/" className="logo-container">
              <img src={logo} className="logo1" alt="logo" />
            </Link>
          </div>   
          {/* <img className="background" src={background} alt="bg image" /> */}
          <Navbar showNav={showNav} />

          <div className={`sidenav ${showNav ? "active" : ""}`}>
            {/* Add content to your sidenav if needed */}
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/roadmap" element={<RoadMapWrapper />} />
          <Route path="/prompts" element={<Prompts />} />
          <Route path="/prompts/:index" element={<PromptsResponse />} />
          <Route path="/prompts/my-prompts" element={<PromptsWorkedOn />} />
          <Route path="/feed" element={<Feed />} />
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

