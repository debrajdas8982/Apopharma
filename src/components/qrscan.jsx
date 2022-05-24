import React, { useState } from 'react'
// import { Divider } from '@mantine/core'
import QRCode from 'qrcode.react'
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link'
import styles from '../assets/styles/components/qrcode.module.css'
// import Button from '../components/interactive/button'
// import HasSearch from '../components/interactive/hasSearch'
const QRScan = () => {
  const [scanCode, setScanCode] = useState('')
  // console.log(scanCode);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Scan prescription code</p>
      </div>
      <div className={styles.important}>
        <h4>Important!</h4>
        <p className={styles['qr-text-p']}>
          Tap to view the prescription details below.
        </p>
      </div>
      <div className={styles.scan}>
        <Link passHref href='/prescriptionDetails'>
          <button type='button' className={styles['scan-btn']}>
            View prescription
          </button>
        </Link>
        <p className={styles['scan-text']}>Press above button to open camera</p>
      </div>
      {/* <div className={styles.information}>
        <p>Tap to show code if QR code reader is not available.</p>
      </div> */}
      <div className={styles['qr-container']}>
        <QRCode value={scanCode} />
      </div>
      <div className={styles.search}>
        <h4 className={styles.qr}>Search Prescription manually</h4>
        <div className={styles['search-input-container']}>
          <input
            className={styles['search-input']}
            value={scanCode}
            name='scanQRCode'
            onChange={(e) => setScanCode(e.target.value)}
            placeholder='Enter Prescription...'
          />
          <div className={styles['search-icon']}>
            <FiSearch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QRScan
