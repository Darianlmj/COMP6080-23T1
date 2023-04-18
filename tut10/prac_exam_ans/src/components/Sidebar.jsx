import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.css'


const Sidebar = () => {
  return (
    <div id={styles.sidebarContainer}>
      <div id={styles.jss1}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
        </div>
        <div className={styles.linkContainer}>
          <Link className={styles.linkWide} to='/home'>Home</Link>

          <Link className={styles.linkWide} to='/make_24'>Make 24</Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar