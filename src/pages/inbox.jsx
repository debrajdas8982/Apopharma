import React from 'react'
import styles from '../assets/styles/pages/inbox.module.css'

export default function Inbox() {
  return (
    <div className={styles.container}>
      <div className={styles['left-side']}>
        <h1>INBOX LEFT</h1>
      </div>
      <div className={styles['right-side']}>
        <h1>INBOX RIGHT</h1>
      </div>
    </div>
  )
}
Inbox.title = 'Inbox'
