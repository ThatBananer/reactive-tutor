import logo from './logo.svg';
import './App.css';
import styles from './reactiveTutoring.module.css'
import TutorListingRepeater from './components/TutorListingRepeater'; // This error doesnt seem to be causing real problems

import FakeFireBaseQueryResults from './shittyFirebaseSimulation/DefinetlyFireBase';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';


import landingPage from './pages/landingPage/landingPage';
import loginPage from './pages/loginPage/logInPage';
import Signup from './pages/signUpPage/signUpPage';
import mainPage from './pages/mainPage/mainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import FakeFireBaseQueryResults from '../shittyFirebaseSimulation/DefinetlyFireBase';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={landingPage}/>
        <Route path ='/login' Component={loginPage}/>
        <Route path ='/signup' Component={Signup}/>
        <Route path = '/main' Component={mainPage}/>
      </Routes>
    </Router>
  );
}

export default App;
