
import styles from '../../reactiveTutoring.module.css'
import TutorListingRepeater from '../../components/TutorListingRepeater'; // This error doesnt seem to be causing real problems

import FakeFireBaseQueryResults from '../../shittyFirebaseSimulation/DefinetlyFireBase';
import TopBar from '../../components/TopBar/TopBar';
import SideBar from '../../components/SideBar/SideBar';

import React, {useState} from 'react';




function MainPage() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    if (selectedOption === 'findTutors') {
      return <div><TutorListingRepeater queryResults = {FakeFireBaseQueryResults} /> </div>;
    } else if (selectedOption === 'option2') {
      return <div>Option 2 content</div>;
    } else if (selectedOption === 'option3') {
      return <div>Option 3 content</div>;
    }
    // Add more conditions for other options or a default content
    return null;
  };

  return (
    <div className={styles.horizontalContainer}>
      <div className={styles.horizontalContainerSidebar}>
      <SideBar onSelect={handleOptionSelect} />
      </div>
      <div className={styles.horizontalContainerObject}>
      <TopBar></TopBar>
      {renderContent()}
      </div>
    </div>
  );
}

export default MainPage;