import { useState } from 'react'
import { Button, MediaQuery } from '@mantine/core'
import { useRouter } from 'next/router'
import styles from '../../assets/styles/components/support.module.css'
import ButtonStyle from '../core/buttonStyle'
// eslint-disable-next-line import/no-cycle
import ContactForm from './contactForms'

const Thankyou = ({ value }) => {
  const [page, setPage] = useState(false)
  const [typeValue, setTypeValue] = useState(value)
  const router = useRouter()
  const handleClick = () => {
    if (router.pathname === '/feedback') {
      router.push('/')
    }
    setPage(true)
    setTypeValue(value)
  }

  return !page ? (
    <div className={styles['thank-container']}>
      <p>Thank you for contacting. We will get back to you ASAP</p>

      <div className={styles.back}>
        <MediaQuery
          query='(max-width: 800px)'
          styles={{ fontSize: 12, height: 28 }}
        >
          <Button sx={ButtonStyle} onClick={handleClick}>
            Go Back
          </Button>
        </MediaQuery>
      </div>
    </div>
  ) : (
    <ContactForm type={typeValue} />
  )
}

export default Thankyou


