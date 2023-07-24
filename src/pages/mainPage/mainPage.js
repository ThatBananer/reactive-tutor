
import styles from '../../reactiveTutoring.module.css'
import TutorListingRepeater from '../../components/TutorListings/TutorListingRepeater';

import FakeFireBaseQueryResults from '../../shittyFirebaseSimulation/DefinetlyFireBase';
import TopBar from '../../components/TopBar/TopBar';
import SideBar from '../../components/SideBar/SideBar';
import SettingsPage from './settingsPage/SettingsPage';
import AboutPage from './aboutPage/AboutPage';
import ProfilePage from './profilePage/profilePage';

import React, {useState} from 'react';




function MainPage() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    if (selectedOption === 'findTutors') {
      return <div><TutorListingRepeater queryResults = {FakeFireBaseQueryResults} /> </div>;
    } else if (selectedOption === 'settings') {
      console.log("SettingsPage")
      return <div><SettingsPage/></div>;
    } else if (selectedOption === 'about') {
      console.log("AboutPage")
      return <div><AboutPage /></div>;
    } else if (selectedOption === 'profile') {
      console.log("ProfilePage")
      return <div><SettingsPage /></div>;
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
      <TopBar onSelect={handleOptionSelect} />
      {renderContent()}
      </div>
    </div>
  );
}

export default MainPage;