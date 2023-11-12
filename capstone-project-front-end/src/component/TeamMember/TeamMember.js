// TeamMember.js
import React, { useState } from 'react';

function TeamMember({ destination }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="team-member">
      <img
        src={destination.image}
        alt={destination.name}
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="dropdown">
          <h3>{destination.name}</h3>
          <p>{destination.credentials}</p>
          <p>{destination.introduction}</p>
        </div>
      )}
    </div>
  );
}

export default TeamMember;
