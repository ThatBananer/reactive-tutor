import React, { useEffect, useState } from "react";
import styles from './TopBar.module.css';
import { auth } from "../../services/fireBaseServicer";
import { searchData } from "../../services/searchUtils";


function TopBar({ onSelect, updateQueryResults }) {
  const handleOptionClick = (option) => {
    onSelect(option);
  };

  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        // User is signed in, you can perform any necessary actions here
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Function to handle search input change
  const onChange = (event) => {
    setSearchQuery(event.target.value);
  };


  // Function to handle search button click
  const handleSearch = async() => {
    console.log("Search Query:", searchQuery);
    const searchResults = await searchData(searchQuery);
    updateQueryResults(searchResults)
    console.log(searchResults);

  };

  return (
    <div className={styles.topBar}>
      <div></div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Find A Tutor By Class..."
          value={searchQuery}
          onChange={onChange}
          className="search-input"
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className={styles.profileImg} onClick={() => handleOptionClick('profile')}>
        <div>
          {isLoggedin ? (
            // User is authenticated, show appropriate buttons
            <div>{auth.currentUser.uid}</div>
          ) : (
            // User is not authenticated, show login and signup buttons
            <div>hi</div>
          )}
        </div>
        <img src="https://media.licdn.com/dms/image/D4E0BAQGduTIDCuZc5A/company-logo_100_100/0/1686498389952?e=1696464000&v=beta&t=2sukds1qbRlKny3UvUcYddVO3T_CMic_kgiMR8Tzw50" alt="Profile" className="profile-img" />
      </div>
    </div>
  );
}

export default TopBar;
