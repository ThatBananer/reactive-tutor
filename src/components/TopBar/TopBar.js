import React from "react";
import styles from './TopBar.module.css';

function TopBar({ onSelect }) {
  const handleOptionClick = (option) => {
    onSelect(option);
  };

  return (
    <div className={styles.topBar}>
      <div></div>
      <div className={styles.profileImg} onClick={() => handleOptionClick('profile')}>
        <img src="https://media.licdn.com/dms/image/D4E0BAQGduTIDCuZc5A/company-logo_100_100/0/1686498389952?e=1696464000&v=beta&t=2sukds1qbRlKny3UvUcYddVO3T_CMic_kgiMR8Tzw50" alt="Profile" className="profile-img" />
      </div>
    </div>  
  );
}

export default TopBar;
