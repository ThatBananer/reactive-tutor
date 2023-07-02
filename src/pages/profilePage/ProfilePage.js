// React Component
import React, { useState } from 'react';
import styles from './ProfilePage.module.css'

const ProfilePage = () => {
  // State to manage profile information
  const [profile, setProfile] = useState({
    profilePicture: '',
    university: '',
    bio: '',
    phoneNumber: '',
    classesTaken: [],
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="profile-container">
      <h2>Edit Profile</h2>
      <div className="profile-form">
        <label htmlFor="profilePicture">Profile Picture</label>
        <input
          type="text"
          id="profilePicture"
          name="profilePicture"
          value={profile.profilePicture}
          onChange={handleInputChange}
        />

        <label htmlFor="university">University</label>
        <input
          type="text"
          id="university"
          name="university"
          value={profile.university}
          onChange={handleInputChange}
        />

        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          name="bio"
          value={profile.bio}
          onChange={handleInputChange}
        ></textarea>

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={profile.phoneNumber}
          onChange={handleInputChange}
        />

        <label htmlFor="classesTaken">Classes Taken</label>
        <input
          type="text"
          id="classesTaken"
          name="classesTaken"
          value={profile.classesTaken}
          onChange={handleInputChange}
        />

        <button>Save</button>
      </div>
    </div>
  );
};

export default ProfilePage;
