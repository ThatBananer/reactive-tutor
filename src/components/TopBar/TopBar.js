import React from "react";
import styles from './TopBar.module.css';
import SearchBar from './components/Searchbar'
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { user,auth } from "../../services/fireBaseServicer";

function TopBar({ onSelect }) {
  const handleOptionClick = (option) => {
    onSelect(option);
  };
  
  const[isLoggedin, setIsLoggedIn] = React.useState(false);
  
  onAuthStateChanged(auth, (user) => {
  if (user) {
    setIsLoggedIn(true)
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    setIsLoggedIn(false)

  }
});

  return (
    <div className={styles.topBar}>
      <div></div>
      <SearchBar/>
      <div className={styles.profileImg} onClick={() => handleOptionClick('profile')}>
        <div>
        {isLoggedin ? (
                    // User is authenticated, show appropriate buttons
                    <div>
                      {auth.currentUser.uid}
                    </div>
                  ) : (
                    // User is not authenticated, show login and signup buttons
                    <div>
                      hi
                    </div>
                  )}
        </div>
        <img src="https://media.licdn.com/dms/image/D4E0BAQGduTIDCuZc5A/company-logo_100_100/0/1686498389952?e=1696464000&v=beta&t=2sukds1qbRlKny3UvUcYddVO3T_CMic_kgiMR8Tzw50" alt="Profile" className="profile-img" />
      </div>
    </div>  
  );
}

export default TopBar;
 