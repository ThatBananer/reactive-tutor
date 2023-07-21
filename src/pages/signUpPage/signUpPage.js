// Login.js

import React, { useState } from 'react';
import styles from './signUpPage.module.css';

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
        <button type="submit">Log In</button>
      </form>
    </div>
    </div>

  );
};

export default Signup;
