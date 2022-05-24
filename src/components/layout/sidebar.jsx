/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-bind */
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter
} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import cx from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { RiLayoutLeftFill, RiLayoutLeft2Fill } from 'react-icons/ri'
import { MdDashboard, MdSupport, MdFeedback, MdInbox } from 'react-icons/md'
import { GiMedicines } from 'react-icons/gi'
import styles from '../../assets/styles/layout/sidebar.module.css'
import carelyoLogo from '../../assets/images/navbar/logo.svg'

const Sidebar = () => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(true)

  const menuBtnStyles = cx(
    styles.menubtn,
    collapsed ? styles['align-center'] : styles['align-right']
  )

  const closeSidebar = () => setCollapsed(true)

  return (
    <ProSidebar collapsed={collapsed} className={styles.absolute}>
      <SidebarHeader className={styles.header}>
        <button
          className={menuBtnStyles}
          type='button'
          onClick={() => setCollapsed((prev) => !prev)}
        >
          {!collapsed ? (
            <RiLayoutLeft2Fill className={styles.icon} />
          ) : (
            <RiLayoutLeftFill className={styles.icon} />
          )}
        </button>
      </SidebarHeader>
      <SidebarContent className={styles.main}>
        <Menu iconShape='circle' className={styles.menu}>
          {router.pathname === '/' ? (
            <MenuItem
              icon={
                <MdDashboard
                  alt='dashboard'
                  size={30}
                  className={styles['active-icon']}
                />
              }
              className={styles.alternate}
              onClick={closeSidebar}
            >
              <Link href='/'>Dashboard</Link>
            </MenuItem>
          ) : (
            <MenuItem
              icon={
                <MdDashboard
                  alt='dashboard'
                  size={30}
                  style={{ marginLeft: '-1.5rem' }}
                />
              }
              className={styles.link}
              onClick={closeSidebar}
            >
              <Link href='/'>Dashboard</Link>
            </MenuItem>
          )}
          {router.pathname === '/scanQrcode' ? (
            <MenuItem
              icon={
                <GiMedicines
                  alt='medicine'
                  size={30}
                  className={styles['active-icon']}
                />
              }
              className={styles.alternate}
              onClick={closeSidebar}
            >
              <Link href='/scanQrcode'>Prescription</Link>
            </MenuItem>
          ) : (
            <MenuItem
              icon={
                <GiMedicines
                  alt='medicine'
                  size={30}
                  style={{ marginLeft: '-1.5rem' }}
                />
              }
              className={styles.link}
              onClick={closeSidebar}
            >
              <Link href='/scanQrcode'>Prescription</Link>
            </MenuItem>
          )}

          {router.pathname === '/inbox' ? (
            <MenuItem
              icon={
                <MdInbox
                  alt='inbox'
                  size={30}
                  className={styles['active-icon']}
                />
              }
              className={styles.alternate}
              onClick={closeSidebar}
            >
              <Link href='/inbox'>Inbox</Link>
            </MenuItem>
          ) : (
            <MenuItem
              icon={
                <MdInbox
                  alt='inbox'
                  size={30}
                  style={{ marginLeft: '-1.5rem' }}
                />
              }
              className={styles.link}
              onClick={closeSidebar}
            >
              <Link href='/inbox'>Inbox</Link>
            </MenuItem>
          )}

          {router.pathname === '/feedback' ? (
            <MenuItem
              icon={
                <MdFeedback
                  alt='feedback'
                  size={30}
                  className={styles['active-icon']}
                />
              }
              className={styles.alternate}
              onClick={closeSidebar}
            >
              <Link href='/feedback'>Feedback</Link>
            </MenuItem>
          ) : (
            <MenuItem
              icon={<MdFeedback size={30} style={{ marginLeft: '-1.5rem' }} />}
              className={styles.link}
              onClick={closeSidebar}
            >
              <Link href='/feedback'>Feedback</Link>
            </MenuItem>
          )}

          {router.pathname === '/support' ? (
            <MenuItem
              icon={
                <MdSupport
                  alt='support'
                  size={30}
                  className={styles['active-icon']}
                />
              }
              className={styles.alternate}
              onClick={closeSidebar}
            >
              <Link href='/support'>Support</Link>
            </MenuItem>
          ) : (
            <MenuItem
              icon={<MdSupport size={30} style={{ marginLeft: '-1.5rem' }} />}
              className={styles.link}
              onClick={closeSidebar}
            >
              <Link href='/support'>Support</Link>
            </MenuItem>
          )}
        </Menu>
      </SidebarContent>
      <SidebarFooter className={styles.footer}>
        <Link href='/' passHref>
          <button
            type='button'
            onClick={closeSidebar}
            className={styles['logo-container']}
          >
            <Image className={styles.logo} src={carelyoLogo} alt='' />
          </button>
        </Link>
        <p>Pharmacist</p>
      </SidebarFooter>
    </ProSidebar>
  )
}

export default Sidebar
