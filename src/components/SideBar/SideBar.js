import React from "react";
import styles from './SideBar.module.css'

function SideBar({ onSelect }) {
  const handleOptionClick = (option) => {
    onSelect(option);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoImg}>
        <img src="https://media.licdn.com/dms/image/D4E0BAQGduTIDCuZc5A/company-logo_100_100/0/1686498389952?e=1696464000&v=beta&t=2sukds1qbRlKny3UvUcYddVO3T_CMic_kgiMR8Tzw50" alt="Logo" className={styles.logoImg} />
      </div>
      <ul className={styles.navigation}>
        <li className={styles.navigationLi} onClick={() => handleOptionClick('findTutors')}>
          <img src="tutor.png" alt="Find Tutors" className={styles.navIcon} />
          <span>Find Tutors</span>
        </li>
        <li className={styles.navigationLi} onClick={() => handleOptionClick('settings')}>
          <img src="settings.png" alt="Settings" className={styles.navIcon} />
          <span>Settings</span>
        </li>
        <li className={styles.navigationLi} onClick={() => handleOptionClick('classes')}>
          <img src="classes.png" alt="Classes" className={styles.navIcon} />
          <span>Classes</span>
        </li>
        <li className={styles.navigationLi} onClick={() => handleOptionClick('about')}>
          <img src="about.png" alt="About Us" className={styles.navIcon} />
          <span>About Us</span>
        </li>
        <li className={styles.navigationLi} onClick={() => handleOptionClick('messages')}>
          <img src="messages.png" alt="Messages" className={styles.navIcon} />
          <span>Messages</span>
        </li>
        <li className={styles.navigationLi} onClick={() => handleOptionClick('my-classes')}>
          <img src="my-classes.png" alt="My Classes" className={styles.navIcon} />
          <span>My Classes</span>
        </li>
        <li className={styles.navigationLi} onClick={() => handleOptionClick('tutor-profile')}>
          <img src="tutor-profile.png" alt="My Tutor Profile" className={styles.navIcon} />
          <span>My Tutor Profile</span>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;