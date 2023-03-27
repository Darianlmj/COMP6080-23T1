import React from 'react'
import styles from './styles.module.css'

type GeneralTemplateProps = {
  title: string
  children: React.ReactNode
}

const GeneralTemplate = ({ title, children }: GeneralTemplateProps) => {
  document.title = title
  return (
    <div className={styles.page}>
      { children }
    </div>
  )
}

export default GeneralTemplate