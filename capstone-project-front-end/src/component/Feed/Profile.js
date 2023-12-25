// Profile.js
import React from "react";
import ProfileCard from "./Profile"; // Assuming both are in the same directory

const Profile = () => {
  return (
    <div className="profile-container">
      <ProfileCard
        profilePhotoUrl="https://avatars.githubusercontent.com/u/115671544?v=4"
        username="PaolaA"
      />
    </div>
  );
};

export default Profile;
