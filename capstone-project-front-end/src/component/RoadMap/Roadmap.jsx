import React from 'react';
import './Roadmap.css';

function Roadmap({ startingLocation, stepsInBetween, destination }) {
  return (
    <div className="amusement-park-map">
      <div className="map-container">
        <div className="attraction starting-location">Starting Point</div>
        {startingLocation.map((location, index) => (
          <div key={`start-${index}`} className="attraction start-marker">
            {`S${index + 1}`}
          </div>
        ))}

        {stepsInBetween.map((location, index) => (
          <div key={`step-${index}`} className="attraction step-marker">
            {`M${index + 1}`}
          </div>
        ))}

        {destination.map((location, index) => (
          <div key={`dest-${index}`} className="attraction destination">
            {`D${index + 1}`}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
