// Profile.js
import React from 'react';
import './Profile.css'; // Import the CSS file for styling

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <div className="daily-prompts-container">
        {/* Main Box */}
        <div className="main-box">
          <div className="box-header">Main Box</div>
          {/* Add content for the main box */}
        </div>

        {/* Previous Boxes */}
        <div className="previous-box">
          <div className="box-header">Previous Box 1</div>
          {/* Add content for previous box 1 */}
        </div>

        <div className="previous-box">
          <div className="box-header">Previous Box 2</div>
          {/* Add content for previous box 2 */}
        </div>

        {/* Add more previous boxes as needed */}
      </div>
    </div>
  );
};

export default Profile;
