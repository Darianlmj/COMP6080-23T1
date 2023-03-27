import React from 'react'
import styles from './styles.module.css'

const GeneralTemplate = ({ title, children }) => {
  document.title = title
  return (
    <div className={styles.page}>
      { children }
    </div>
  )
}

export default GeneralTemplate