import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./component/Home Page/Home";
import Signup from "./component/Signup/Signup";
import AboutPage from "./component/About/About";
import Navbar from "./component/Navbar/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "./component/Footer/Footer";
import logo from "./component/logo1.png" // Update the path accordingly

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Router>
      <div className="App">
        <header>
          <div className="menu">
            <MenuIcon onClick={() => setShowNav(!showNav)} />
          </div>
          <img src={logo} className="logo" alt="logo" />
        </header>
        <Navbar show={showNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add more routes for other components/pages */}
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
