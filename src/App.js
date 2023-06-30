import logo from './logo.svg';
import './App.css';
import styles from './reactiveTutoring.module.css'
import TutorListingRepeater from './components/TutorListingRepeater'; // This error doesnt seem to be causing real problems

import FakeFireBaseQueryResults from './shittyFirebaseSimulation/DefinetlyFireBase';
//import FakeFireBaseQueryResults from '../shittyFirebaseSimulation/DefinetlyFireBase';

function App() {
  return (
    <TutorListingRepeater queryResults = {FakeFireBaseQueryResults} />
  );
}

export default App;
