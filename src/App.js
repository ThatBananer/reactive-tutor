import logo from './logo.svg';
import './App.css';
import styles from './reactiveTutoring.module.css'


import LandingPage from './pages/landingPage/landingPage';
import LoginPage from './pages/loginPage/logInPage';
import Signup from './pages/signUpPage/signUpPage';
import MainPage from './pages/mainPage/mainPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfileSetup from './pages/profileSetup/ProfileSetup';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

function App() {
  
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  }


  const {currentUser} = useContext(AuthContext)




  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/profileSetup" element={<RequireAuth><ProfileSetup/></RequireAuth>} />
      </Routes>
    </Router>
  );
}

export default App;