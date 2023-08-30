
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

  const [selectedOption, setSelectedOption] = useState('findTutors');
  const [queryResults, setQueryResults] = useState(FakeFireBaseQueryResults); 

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const updateQueryResults = (results) => {
    setQueryResults(results);
  };  

  const renderContent = () => {
    if (selectedOption === 'findTutors') {
      return <div><TutorListingRepeater queryResults = {queryResults} /> </div>;
    } else if (selectedOption === 'settings') {
      return <div><SettingsPage/></div>;
    } else if (selectedOption === 'about') {
      return <div><AboutPage /></div>;
    } else if (selectedOption === 'profile') {
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
      <TopBar onSelect={handleOptionSelect} updateQueryResults={updateQueryResults}/>
      {renderContent()}
      </div>
    </div>
  );
}

export default MainPage;