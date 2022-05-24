import React from 'react'
import Image from 'next/image'
import { Divider } from '@mantine/core'
import styles from '../assets/styles/pages/profile.module.css'
import UpdatePassword from '../components/updatePassword'
import GroupLogo from '../assets/icons/groupLogo.svg'

export default function Profile() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h4>My Profile</h4>
        </div>
        <Divider orientation='horizontal' size={3} className={styles.line} />
        <Image
          src={GroupLogo}
          alt='grouplogo'
          className={styles.containerlogo}
        />
        <UpdatePassword />
      </div>
    </div>
  )
}
Profile.title = 'Profile'
