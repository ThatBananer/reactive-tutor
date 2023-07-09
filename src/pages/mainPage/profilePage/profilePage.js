import React, { useState } from "react";

import styles from './profilePage.module.css'

function ProfilePage(){
    const [bio, setBio] = useState("");
  const [classesTaken, setClassesTaken] = useState("");

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleClassesTakenChange = (e) => {
    setClassesTaken(e.target.value);
  };

  const handleSaveChanges = () => {
    // Perform actions to save the changes
    console.log("Changes saved!");
  };
    return(
        <div className={styles.container}>
            <div className="profilePicture">
        {/* Display the profile picture */}
        <img
          src="https://media.licdn.com/dms/image/D4E0BAQGduTIDCuZc5A/company-logo_100_100/0/1686498389952?e=1696464000&v=beta&t=2sukds1qbRlKny3UvUcYddVO3T_CMic_kgiMR8Tzw50"
          alt="Profile"
          className="profile-img"
        />
      </div>

     
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          value={bio}
          onChange={handleBioChange}
          placeholder="Enter your bio"
        />

        

        <label htmlFor="classesTaken">Classes Taken:</label>
        <input
          type="text"
          id="classes-taken"
          value={classesTaken}
          onChange={handleClassesTakenChange}
          placeholder="Enter classes taken"
        />
      

      <button className="saveButton" onClick={handleSaveChanges}>
        Save Changes
      </button>
        </div>
    )
}

export default ProfilePage;