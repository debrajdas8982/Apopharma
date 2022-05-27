// import Box from '@mui/material/Box'
import React, { useState } from 'react';
import { Box } from '@mantine/core';
import styles from '../../assets/styles/layout/layout.module.css'
import Footer from './footer'
import MobileFooter from './mobilefooter'
import Sidebar from './sidebar'
import Navbar from './navbar'
import Login from './../Login';

function Layout({ children, title }) {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className={styles.wrapper}>
      <Box sx={{ display: { xs: 'none' } }}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      </Box>
      <div className={styles['content-wrapper']}>
        <Navbar title={title} />
        <h1 className={styles['page-title']}>{title}</h1>
        <main className={styles.content}>{children}</main>
        {/* <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <MobileFooter />
        </Box> */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Footer />
        </Box>
      </div>
    </div>
  )
}

export default Layout
