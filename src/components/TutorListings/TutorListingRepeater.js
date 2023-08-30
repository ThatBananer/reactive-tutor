import FakeFireBaseQueryResults from '../../shittyFirebaseSimulation/DefinetlyFireBase.js';
import TutorListing from './TutorListing.js';
import styles from './tutorListings.module.css'




function TutorListingRepeater({queryResults}){
    return (
      <div className={styles.overFlow}>
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
      </div>
      );
}

export default TutorListingRepeater;

//<TutorListingRepeater queryResults = {FakeFireBaseQueryResults} />