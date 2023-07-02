import React from "react";
import styles from './SideBar.module.css'

function SideBar(){
    return(
        <div className={styles.sidebar}>
        <div className={styles.logoImg}>
          <img src="https://media.licdn.com/dms/image/D4E0BAQGduTIDCuZc5A/company-logo_100_100/0/1686498389952?e=1696464000&v=beta&t=2sukds1qbRlKny3UvUcYddVO3T_CMic_kgiMR8Tzw50" alt="Logo" className={styles.logoImg} />
        </div>
        <ul className={styles.navigation}>
          <li className={styles.navigationLi}>
            <img src="settings.png" alt="Settings" className={styles.navIcon} />
            <span>Settings</span>
          </li>
          <li className={styles.navigationLi}>
            <img src="classes.png" alt="Classes" className={styles.navIcon} />
            <span>Classes</span>
          </li>
          <li className={styles.navigationLi}>
            <img src="about.png" alt="About Us" className={styles.navIcon} />
            <span>About Us</span>
          </li>
          <li className={styles.navigationLi}>
            <img src="messages.png" alt="Messages" className={styles.navIcon} />
            <span>Messages</span>
          </li>
          <li className={styles.navigationLi}>
            <img src="my-classes.png" alt="My Classes" className={styles.navIcon} />
            <span>My Classes</span>
          </li>
          <li className={styles.navigationLi}>
            <img src="tutor-profile.png" alt="My Tutor Profile" className={styles.navIcon} />
            <span>My Tutor Profile</span>
          </li>
        </ul>
      </div>
       
    )
}

export default SideBar;