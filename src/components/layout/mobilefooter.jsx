import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare
} from 'react-icons/fa'
import styles from '../../assets/styles/layout/mobilefooter.module.css'

const MobileFooter = () => {
  return (
    <div className={styles['l-footer']}>
      <div className={styles['l-footer-wrapper']}>
        <div className={styles['l-footer-social-media-links']}>
          <a href='https://twitter.com/CarelyoHealth'>
            <FaTwitterSquare className='l-footer-icon' size={35} />
          </a>
          <a href='https://www.facebook.com/carelyohealthcare'>
            <FaFacebookSquare className='l-footer-icon' size={35} />
          </a>
          <a href='https://www.linkedin.com/in/carelyo/'>
            <FaLinkedin className='l-footer-icon' size={35} />
          </a>
          <a href='https://www.instagram.com/carelyocarelyo/'>
            <FaInstagramSquare className='l-footer-icon' size={35} />
          </a>
        </div>
        {/* <div className={styles['l-footer-copyright-wrapper']}>
          <p className={styles['l-footer-copyright-powered']}>
            Powered by SWEDCON 18 AB
          </p>
          <div className={styles['l-footer-copyright-divider']} />
          <p className={styles['l-footer-copyright-brand']}>
            &copy; 2022 Carelyo Nigeria. All rights reserved.
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default MobileFooter
