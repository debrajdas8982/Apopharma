import React from 'react'
import styles from '../assets/styles/pages/feedback.module.css'
import ContactForm from '../components/contact/contactForms'

const Feedback = () => {
  return (
    <div className={styles.container}>
      <div className={styles['container-form']}>
      <ContactForm type='feedback' />
      </div>
    </div>
  )
}

export default Feedback

Feedback.title = 'Feedback'

