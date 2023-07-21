import React from 'react';
import styles from './tutorListings.module.css'


function TutorListing({ profileName, profileBio, profilePic, profileSchool }) {
  return (
    <div className="grid">
      <div className={styles.tutorListingBox}>
        <img src={profilePic} alt="profile pic" className={styles.tutorListingPic} />
        <div className={styles.tutorListingBio}>
          <p><b>{profileName}</b></p>
          <p><b>{profileSchool}</b></p>
          <p>{profileBio}</p>
        </div>
      </div>
    </div>

    );
}

export default TutorListing;
