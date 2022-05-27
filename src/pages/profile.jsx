import React from 'react'
import Image from 'next/image'
import { Divider } from '@mantine/core'
import styles from '../assets/styles/pages/profile.module.css'
import UpdatePassword from '../components/updatePassword'
import ProfileCard from '../components/profileCard'

export default function Profile() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Divider orientation='horizontal' size={3} className={styles.line} />
        <ProfileCard />
        <UpdatePassword />
      </div>
    </div>
  )
}
Profile.title = 'Profile'
