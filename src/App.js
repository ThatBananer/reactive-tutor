import logo from './logo.svg';
import './App.css';
import styles from './reactiveTutoring.module.css'
import TutorListingRepeater from './components/TutorListings/TutorListingRepeater';

import FakeFireBaseQueryResults from './shittyFirebaseSimulation/DefinetlyFireBase';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';

import landingPage from './pages/landingPage/landingPage';
import loginPage from './pages/loginPage/logInPage';
import Signup from './pages/signUpPage/signUpPage';
import mainPage from './pages/mainPage/mainPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfileSetup from './pages/profileSetup/ProfileSetup';

function App() {
  const currentUser = false;

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/signup" />;
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<landingPage />} />
        <Route path="/login" element={<loginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/signup/profileSetup"
          element={<RequireAuth><ProfileSetup /></RequireAuth>}
        />
        <Route path="/main" element={<RequireAuth><mainPage /></RequireAuth>} />
      </Routes>
    </Router>
  );
}

export default App;