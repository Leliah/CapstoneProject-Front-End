import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './component/Navbar/Navbar';
import Home from "./component/Home Page/Home";
import Signup from "./component/Signup/Signup";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} /> {/* Add a route for the SignUp component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
