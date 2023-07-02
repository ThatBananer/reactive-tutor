import logo from './logo.svg';
import './App.css';
import styles from './reactiveTutoring.module.css'
import TutorListingRepeater from './components/TutorListingRepeater'; // This error doesnt seem to be causing real problems

import FakeFireBaseQueryResults from './shittyFirebaseSimulation/DefinetlyFireBase';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';

//import FakeFireBaseQueryResults from '../shittyFirebaseSimulation/DefinetlyFireBase';

function App() {
  return (
    <div className=''>
      
      <TopBar></TopBar>
      <TutorListingRepeater queryResults = {FakeFireBaseQueryResults} />
      <SideBar></SideBar>
      
    </div>
  );
}

export default App;
