import React from "react";
import "./About.css"; // Import the CSS file

function About() {
  const ourTeam = {
    adrianBurke: {
      name: "Adrian Burke",
      bio: "Full Stack Developer",
      github: "https://github.com/AdrianBurke1",
      image: "https://lh3.googleusercontent.com/a/ACg8ocJC43pN3QyPOcYTFhy8Zq5u38J7mad26jK1olYrlIb3-A=s576-c-no",
    },
    ariusPhilips: {
      name: "Arius Philips",
      bio: "Full Stack Developer",
      github: "https://github.com/Ari-So-Irie",
      image: "https://avatars.githubusercontent.com/u/115671653?v=4",
    },
    paolaAracena: {
      name: "Paola Aracene",
      bio: "Full Stack Developer",
      github: "https://github.com/PaoAracena",
      image: "https://avatars.githubusercontent.com/u/115671544?v=4"
    },
    leliahSpruill: {
      name: " Leliah Spruill",
      bio: "Full Stack Developer",
      github: "https://github.com/Leliah",
      image: "https://avatars.githubusercontent.com/u/115671548?v=4"
    }
  };

  return (
    <div className="main-content" style={{ backgroundColor: "#fae8ca" }}> {/* Apply background color to the main content */}
      <div className="about-container">
        <div className="about">
          <p style={{ fontSize: 20 }}>
          </p>
          <h1 className="meet-the-team"> MindfulMe Creators </h1>
          <div className="developers">
            {/* DEV 1  */}
            <div className="developer">
              <img
                src={ourTeam.ariusPhilips.image}
                alt="Arius Philips"
              />
              <p>{ourTeam.ariusPhilips.bio}</p>
              <div className="button-container">
                <button className="button">
                  <a href={ourTeam.ariusPhilips.github}>Arius's GitHub</a>
                </button>
              </div>
            </div>
            {/* DEV 2  */}
            <div className="developer">
              <img
                src={ourTeam.leliahSpruill.image}
                alt="Leliah Spruill"
              />
              <p>{ourTeam.leliahSpruill.bio}</p>
              <div className="button-container">
                <button className="button">
                  <a href={ourTeam.leliahSpruill.github}>Leliah's GitHub</a>
                </button>
              </div>
            </div>
            {/* DEV 3  */}
            <div className="developer">
              <img
                src={ourTeam.paolaAracena.image}
                alt="Paola Aracena"
              />
              <p>{ourTeam.paolaAracena.bio}</p>
              <div className="button-container">
                <button className="button">
                  <a href={ourTeam.paolaAracena.github}>Paola's GitHub</a>
                </button>
              </div>
            </div>
            {/* DEV 4 */}
            <div className="developer">
              <img
                src={ourTeam.adrianBurke.image}
                alt="Adrian Burke"
              />
              <p>{ourTeam.adrianBurke.bio}</p>
              <div className="button-container">
                <button className="button">
                  <a href={ourTeam.adrianBurke.github}>Adrian's GitHub</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar">{/* Sidebar content */}</div>
      </div>
    </div>
  );
}

export default About;
