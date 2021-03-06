import React, { useState } from 'react';
import styles from '../../assets/styles/layout/dashboard.module.css'
import ScanQrCode from '../../pages/scanQrcode'
import Inbox from '../../pages/inbox'


const Dashboard = () => {

  return (
    <div className={styles.container}>
      <div className={styles['left-side']}>
        <ScanQrCode />
      </div>
      <div className={styles['right-side']}>
        <Inbox />
      </div>
    </div>
  )
}

export default Dashboard
