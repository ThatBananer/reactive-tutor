import logo from './logo.svg';
import './App.css';
import styles from './reactiveTutoring.module.css'
import TutorListingRepeater from './components/TutorListings/TutorListingRepeater';

import FakeFireBaseQueryResults from './shittyFirebaseSimulation/DefinetlyFireBase';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';

import LandingPage from './pages/landingPage/landingPage';
import LoginPage from './pages/loginPage/logInPage';
import Signup from './pages/signUpPage/signUpPage';
import MainPage from './pages/mainPage/mainPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfileSetup from './pages/profileSetup/ProfileSetup';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

function App() {
  
  const {currentUser} = useContext(AuthContext)


  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  console.log(currentUser)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/signup/profileSetup"
          element={<RequireAuth><ProfileSetup /></RequireAuth>}
        />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;