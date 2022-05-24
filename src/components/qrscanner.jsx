import React, { useEffect, useState } from 'react'
import QrReader from 'react-qr-scanner'

export default function QRScanner({ setResult, result }) {
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => setPageLoaded(true), [])

  return (
    <div>
      {!result && pageLoaded && (
        <QrReader
          /* initialStream={} */
          style={{
            height: 240,
            width: 320
          }}
          facingMode='environment' // rear camera
          onError={(err) => console.log(err)}
          onScan={(data) => setResult(data)}
        />
      )}
    </div>
  )
}