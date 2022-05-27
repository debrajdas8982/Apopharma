import Image from 'next/image'
import { useClickOutside } from '@mantine/hooks'
// import Box from '@mui/material/Box'
import { Box } from '@mantine/core';
import Link from 'next/link'
import { useState } from 'react'
import styles from '../../assets/styles/layout/navbar.module.css'
import Logo from '../../assets/images/navbar/logo.svg'
import HamburgerMenu from './hamburgermenu'

import profileIcon from '../../assets/icons/profileIcon.svg'
// import { useProfile } from '../../helpers/hooks/useProfile'

const Navbar = ({ title }) => {
  // const { User } = useProfile()
  // console.log(User)
  const [dropdownActive, setDropdownActive] = useState(false)
  const dropdownRef = useClickOutside(() => setDropdownActive(false))
  const toggleMenu = () => setDropdownActive((prev) => !prev)
  const menuItems = [
    {
      id: 1,
      title: 'Profile',
      href: '/profile'
    }
  ]

  return (
    <>
      <Box
        sx={() => ({
          display: 'block',
          '@media (min-width: 600px)': {
            display: 'none'
          }
        })}
      >
         <div id='menuID' className={styles['l-navbar-open']}>
          <button
            type='button'
            onClick={() => router.push('/')}
            className={styles.logo}
          >
            <Image
              className={styles['l-navbar-logo']}
              width={100}
              src={Logo}
              alt=''
            />
          </button>
          <HamburgerMenu right />
        </div>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <div className={styles['menu-container']}>
          <h2>{title}</h2>
          {/* <WelcomeBox name={User?.email} /> */}
          <div ref={dropdownRef}>
            <div className={styles.title}>
              <button
                type='button'
                onClick={toggleMenu}
                className={styles['menu-trigger']}
              >
                <Image src={profileIcon} alt='avatar' className={styles.icon} />
              </button>
            </div>
            {dropdownActive && (
              <nav className={styles.menu}>
                <ul>
                  {menuItems.map((item) => (
                    <li
                      aria-hidden='true'
                      onClick={toggleMenu}
                      key={item.id}
                      className={`${styles.list} ${
                        styles[item.customClassName]
                      }`}
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </li>
                  ))}
                <li
                    aria-hidden='true'
                    // onClick={logout}
                    className={styles.logout}
                  >
                    <p>LOGOUT</p>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Box>
    </>
  )
}

export default Navbar
