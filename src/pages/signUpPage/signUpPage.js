// Login.js

import React, { useState } from 'react';
import styles from './signUpPage.module.css';
import { Link } from "react-router-dom";
import { signInWithGoogle, emailRegister } from '../../services/fireBaseServicer';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., send data to server
    console.log(`Login submitted: ${email}, ${password}`);
    emailRegister(email, password);
  };

  return (
    <div>
    <h1>BLANK LOGO</h1>
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <input
          type="password"
          placeholder="ConfirmPassword"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />
        
          <button type="submit" onSubmit={handleSubmit}>Signup</button>
        
        <hr/>
        
      </form>
      <div>
        <button className ={styles.googSign} onClick={signInWithGoogle}><img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" style={{ marginRight: '10px', width: '20px', height: '20px' }}/> Sign in with Google </button>
      </div>
    </div>
    </div>

  );
};

export default Signup;
