import TutorListing from './TutorListing.js';
import styles from '../reactiveTutoring.module.css'


function TutorListingRepeater({queryResults}){
    return (
        <div className={styles.grid}>
          {queryResults.map((tutorUser) => (
            <TutorListing 
            profileName={tutorUser.name} 
            profileBio={tutorUser.bio}
            profilePic={tutorUser.pic}
            profileSchool={tutorUser.uni}
            />
          ))}
        </div>
      );
}

export default TutorListingRepeater
