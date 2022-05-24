import { Divider } from '@mantine/core'
import styles from '../assets/styles/pages/support.module.css'
import Faq from '../components/contact/faq'
import ContactForm from '../components/contact/contactForms'

const Support = () => {
  return (
    <div className={styles.container}>
      <div className={styles['container-form']}>
        <ContactForm type='support' />
      </div>
      <div className={styles.line}>
        <Divider orientation='vertical' />
      </div>
      <div className={styles['container-faq']}>
        <Faq />
      </div>
    </div>
  )
}

export default Support

Support.title = 'Support'
