import React from 'react'
import styles from '../assets/styles/pages/inbox.module.css'
import SearchInbox from './../components/inbox/searchInbox';

export default function Inbox() {
  return (
    <div className={styles.container}>
      <div className={styles['left-side']}>
        <SearchInbox />
      </div>
      <div className={styles['right-side']}>
        <h1>INBOX RIGHT</h1>
      </div>
    </div>
  )
}
Inbox.title = 'Inbox'
