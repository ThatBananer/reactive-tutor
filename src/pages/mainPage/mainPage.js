
import styles from '../../reactiveTutoring.module.css'
import TutorListingRepeater from '../../components/TutorListingRepeater'; // This error doesnt seem to be causing real problems

import FakeFireBaseQueryResults from '../../shittyFirebaseSimulation/DefinetlyFireBase';
import TopBar from '../../components/TopBar/TopBar';
import SideBar from '../../components/SideBar/SideBar';

import React, {useState} from 'react';




function mainPage() {
  return (
    <div className={styles.horizontalContainer}>
      <div className={styles.horizontalContainerSidebar}>
      <SideBar></SideBar>
      </div>
      <div className={styles.horizontalContainerObject}>
      <TopBar></TopBar>
      <TutorListingRepeater queryResults = {FakeFireBaseQueryResults} />
      </div>
    </div>
  );
}

export default mainPage;