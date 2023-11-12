import React, { useState } from "react";


const developers = [
  {
    name: "Leliah Spruill",
    credentials: "Back-End Developer",
    introduction: "Excels in server-side development and databases.",
    imageUrl: "https://avatars.githubusercontent.com/u/115671548?v=4", // Replace with the actual image URL
  },
  {
    name: "Paola Aracena",
    credentials: "Back-End Developer",
    introduction: "Excels in server-side development and databases.",
    imageUrl: 'https://avatars.githubusercontent.com/u/115671544?v=4', // Replace with the actual image URL
  },
  {
    name: "Arius Philips",
    credentials: "Back-End Developer",
    introduction: "I'm a Full Stack Web Developer with a passion for empower individuals.",
    imageUrl: "https://avatars.githubusercontent.com/u/115671653?v=4", // Replace with the actual image URL
  },
  {
    name: "Adrian Burke",
    credentials: "Back-End Developer",
    introduction: "Excels in server-side development and databases.",
    imageUrl: "https://avatars.githubusercontent.com/u/114108495?v=4", // Replace with the actual image URL
  },
  // Add more developers as needed
];

function AboutPage() {
  const [currentDeveloperIndex, setCurrentDeveloperIndex] = useState(0);

  const handleNextDeveloper = () => {
    // Increment the index to move to the next developer
    setCurrentDeveloperIndex((prevIndex) =>
      prevIndex === developers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentDeveloper = developers[currentDeveloperIndex];

  return (
    <div className="about-page">
      <h1>Meet The Team</h1>
      <div className="developer-info">
        <img src={currentDeveloper.imageUrl} alt={currentDeveloper.name} />
        <div className="developer-details">
          <h2>{currentDeveloper.name}</h2>
          <p>{currentDeveloper.credentials}</p>
          <p>{currentDeveloper.introduction}</p>
        </div>
      </div>
      <button onClick={handleNextDeveloper}>Next Developer</button>
    </div>
  );
}

export default AboutPage;
