import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { slide as Menu } from 'react-burger-menu'
import { useRouter } from 'next/router'
import { useMediaQuery } from '@mantine/hooks'
import styles from '../../assets/styles/components/hamburgermenu.module.css'
import HamburgerIcon from '../../assets/images/navbar/hamburger.svg'
import CrossIcon from '../../assets/images/navbar/cross.svg'

export default function HamburgerMenu({ ...props }) {
  const [isOpen, setIsOpen] = useState(null)
  const router = useRouter()
  const media = useMediaQuery('(max-width: 426px)')
  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <Menu
      {...props}
      customBurgerIcon={
        <Image alt='menu hamb btn' src={isOpen ? CrossIcon : HamburgerIcon} />
      }
      customCrossIcon={false}
      isOpen={isOpen}
      onOpen={toggleMenu}
      onClose={toggleMenu}
      width={media ? '100%' : '260px'}
    >
     {router.pathname === '/' ? (
        <button
          type='button'
          onClick={toggleMenu}
          className={styles['menu-item-active']}
        >
          <Link href='/'>Dashboard</Link>
        </button>
      ) : (
        <button
          type='button'
          onClick={toggleMenu}
          className={styles['menu-item']}
        >
          <Link href='/'>Dashboard</Link>
        </button>
      )}

      {router.pathname === '/inbox' ? (
        <button
          type='button'
          onClick={toggleMenu}
          className={styles['menu-item-active']}
        >
          <Link href='/inbox'>Inbox</Link>
        </button>
      ) : (
        <button
          type='button'
          onClick={toggleMenu}
          className={styles['menu-item']}
        >
          <Link href='/inbox'>Inbox</Link>
        </button>
      )}

      {router.pathname === '/scanQrcode' ? (
        <button
          type='button'
          onClick={toggleMenu}
          className={styles['menu-item-active']}
        >
          <Link href='/scanQrcode'>Prescription</Link>
        </button>
      ) : (
        <button
          type='button'
          onClick={toggleMenu}
          className={styles['menu-item']}
        >
          <Link href='/scanQrcode'>Prescription</Link>
        </button>
      )}

      {router.pathname === '/profile' ? (
        <button
          type='button'
          onClick={toggleMenu}
          className={styles['menu-item-active']}
        >
          <Link href='/profile'>Profile</Link>
        </button>
      ) : (
        <button
          type='button'
          onClick={toggleMenu}
          className={styles['menu-item']}
        >
          <Link href='/profile'>Profile</Link>
        </button>
      )}

      {router.pathname === '/support' ? (
        <button
          type='button'
          onClick={toggleMenu}
          className={styles['menu-item-active']}
        >
          <Link href='/support'>Support</Link>
        </button>
      ) : (
        <button
          type='button'
          onClick={toggleMenu}
          className={styles['menu-item']}
        >
          <Link href='/support'>Support</Link>
        </button>
      )}

      {router.pathname === '/feedback' ? (
        <button
          type='button'
          onClick={toggleMenu}
          className={styles['menu-item-active']}
        >
          <Link href='/feedback'>Feedback</Link>
        </button>
      ) : (
        <button
          type='button'
          onClick={toggleMenu}
          className={styles['menu-item']}
        >
          <Link href='/feedback'>Feedback</Link>
        </button>
      )} 

      <button
        type='button'
        onClick={toggleMenu}
        className={styles['menu-item']}
      >
        <Link
          href='/'
          onClick={() => {
            console.log('Auth.logout()')
          }}
        >
          Log Out
        </Link>
      </button>

      <p className='bm-footer'>
        APOTEK PHARMA <br /> PHARMACIST
      </p>
    </Menu>
  )
}
