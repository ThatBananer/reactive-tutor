import React from "react";
import styles from './SideBar.module.css'

function SideBar(){
    return(
        <div className={styles.sidebar}>
        <div className={styles.logoImg}>
          <img src="logo.png" alt="Logo" className={styles.logoImg} />
        </div>
        <ul className={styles.navigation}>
          <li>
            <img src="settings.png" alt="Settings" className={styles.navIcon} />
            <span>Settings</span>
          </li>
          <li>
            <img src="classes.png" alt="Classes" className={styles.navIcon} />
            <span>Classes</span>
          </li>
          <li>
            <img src="about.png" alt="About Us" className={styles.navIcon} />
            <span>About Us</span>
          </li>
          <li>
            <img src="messages.png" alt="Messages" className={styles.navIcon} />
            <span>Messages</span>
          </li>
          <li>
            <img src="my-classes.png" alt="My Classes" className={styles.navIcon} />
            <span>My Classes</span>
          </li>
          <li>
            <img src="tutor-profile.png" alt="My Tutor Profile" className={styles.navIcon} />
            <span>My Tutor Profile</span>
          </li>
        </ul>
      </div>
       
    )
}

export default SideBar;