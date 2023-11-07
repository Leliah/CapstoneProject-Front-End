import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

function Home() {
  const [showHello, setShowHello] = useState(false);
  const languages = ['Hello', 'Bonjour', 'Hola', 'مرحبًا', 'Merhaba', '你好'];
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    // Use a setTimeout to show the greeting after a delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setShowHello(true);
    }, );

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // Cycle through the languages array
    const interval = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) =>
        prevIndex === languages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change language every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hello-container">
      {showHello && <div className="hello-text">{languages[currentLanguageIndex]}</div>}
      <div className="button-container">
        <button className="login-button">Log in</button>
        <Link to="/signup">
          <button className="signup-button">Sign up</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
