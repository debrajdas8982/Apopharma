import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { GrCertificate } from 'react-icons/gr'
import { HiUser } from 'react-icons/hi'
import { IoMdMail } from 'react-icons/io'
// import { useProfile } from '../helpers/hooks/useProfile'
import styles from '../assets/styles/components/profileCard.module.css'

const ProfileCard = () => {
//   const { User } = useProfile()

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles['info-left']}>
          <div className={styles['info-flex']}>
            <GrCertificate className={styles.icon} size={24} />
            <p className={styles['info-title']}>Title:</p>
          </div>
          <div className={styles['info-flex']}>
            <HiUser className={styles.icon} size={24} />
            <p className={styles['info-title']}>Full name:</p>
          </div>
          <div className={styles['info-flex']}>
            <IoMdMail className={styles.icon} size={24} />
            <p className={styles['info-title']}>Email:</p>
          </div>
          <div className={styles['info-flex']}>
            <BsTelephoneFill className={styles.icon} size={24} />
            <p className={styles['info-title']}>Phone number:</p>
          </div>
        </div>
        <div className={styles['info-right']}>
          <div>
            <p className={styles['info-text']}>Mr.</p>
          </div>
          <div>
            <p className={styles['info-text']}>Eklund Stromberg</p>
          </div>
          <div>
            <p className={styles['info-text']}>ek@gmail.com</p>
          </div>
          <div>
            <p className={styles['info-text']}>0764537359</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
