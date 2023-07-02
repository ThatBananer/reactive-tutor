import React from "react"
import styles from './TopBar.module.css'


function TopBar(){
  return (
    <div className={styles.topBar}>
      <div className={styles.logoImg}>
        <a href="homePage.html">
          <img src="https://media.licdn.com/dms/image/D4E0BAQGduTIDCuZc5A/company-logo_100_100/0/1686498389952?e=1696464000&v=beta&t=2sukds1qbRlKny3UvUcYddVO3T_CMic_kgiMR8Tzw50" alt="Logo" className="logo-img" />
        </a>
      </div>
      <div className={styles.profileImg}>
        <a href="profile.html">
          <img src="https://media.licdn.com/dms/image/D4E0BAQGduTIDCuZc5A/company-logo_100_100/0/1686498389952?e=1696464000&v=beta&t=2sukds1qbRlKny3UvUcYddVO3T_CMic_kgiMR8Tzw50" alt="Profile" className="profile-img" />
        </a>
      </div>
    </div>  
  )
}

export default TopBar;