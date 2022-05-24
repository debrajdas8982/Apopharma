import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { useRouter } from 'next/router'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Input } from '@mantine/core'
import styles from '../assets/styles/components/qrscan.module.css'
import QRScanner from './qrscanner'
import QRCode from 'qrcode.react'

const QRScan = () => {
  const router = useRouter()
  const [scanCode, setScanCode] = useState('')
  const [openCamera, setOpenCamera] = useState(false)
  const [ result, setResult ] = useState()

  useEffect(
    () => result && openCamera && router.push('/prescriptionDetails'),
    [result, router, openCamera]
  )


  return (
    <div className={styles.container}>
      <div className={styles.important}>
        <h4>Important!</h4>
        <p className={styles['qr-text-p']}>
          This QR code should only be scanned by a registered pharmacist.
        </p>
      </div>

      <div className={styles.scan}>
        {openCamera && (
          <div className={styles['qr-scan-window']}>
            <div className={styles['qr-scan-window-header']}>
              <button
                type='button'
                className={styles['qr-scan-header-back-btn']}
                onClick={() => setOpenCamera(false)}
              >
                <IoIosArrowRoundBack
                  className={styles['qr-scan-back-btn-icon']}
                />
              </button>
              <h2 className={styles['qr-scan-header-title']}>Scan QR code</h2>
              <div />
            </div>

            <div className={styles['qr-scan-window-content']}>
              <div className={styles['qr-scan-camera-container']}>
                <QRScanner result={result} setResult={setResult} />
              </div>

              <small className={styles['qr-scan-camera-text']}>
                Scan prescription QR code
              </small>
            </div>

            <div className={styles['qr-scan-window-footer']}>
              <button
                type='button'
                className={styles['qr-scan-window-close-btn']}
                onClick={() => setOpenCamera(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        <button
          type='button'
          className={styles['scan-btn']}
          onClick={() => setOpenCamera(true)}
        >
          Scan prescription QR code
        </button>
        <p className={styles['scan-text']}>Press above button to open camera</p>
      </div>

      <div className={styles.information}>
        <p>Tap to show code if QR code reader is not available.</p>
      </div>
   
      <div className={styles['qr-container']}>
        <QRCode value={scanCode} />
      </div>
      <div className={styles.search}>
        <h4 className={styles.qr}>QR insert Code</h4>
        <div className={styles['input-container']}>
          <Input
            className={styles['search-input']}
            value={scanCode}
            name='scanPrescription'
            onChange={(e) => setScanCode(e.target.value)}
            placeholder='Enter QR code here...'
          />
          <IoSearchOutline size={24} className={styles.icon} />
        </div>
      </div>
    </div>
  )
}

export default QRScan
