import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { slide as Menu } from 'react-burger-menu'
import { useMediaQuery } from '@mantine/hooks'
import styles from '../../assets/styles/components/hamburgermenu.module.css'
import HamburgerIcon from '../../assets/images/navbar/hamburger.svg'
import CrossIcon from '../../assets/images/navbar/cross.svg'

export default function HamburgerMenu({ ...props }) {
  const [isOpen, setIsOpen] = useState(null)
  const media = useMediaQuery('(max-width: 426px)')
  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  console.log(media)
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
      <button
        type='button'
        onClick={toggleMenu}
        className={styles['menu-item']}
      >
        <Link href='/'>Dashboard</Link>
      </button>
      <button
        type='button'
        onClick={toggleMenu}
        className={styles['menu-item']}
      >
        <Link onClick={toggleMenu} href='/'>
          Inbox
        </Link>
      </button>

      <button
        type='button'
        onClick={toggleMenu}
        className={styles['menu-item']}
      >
        <Link onClick={toggleMenu} href='/'>
          Forum
        </Link>
      </button>

      <button
        type='button'
        onClick={toggleMenu}
        className={styles['menu-item']}
      >
        <Link onClick={toggleMenu} href='/'>
          About
        </Link>
      </button>

      <button
        type='button'
        onClick={toggleMenu}
        className={styles['menu-item']}
      >
        <Link onClick={toggleMenu} href='/'>
          Profile
        </Link>
      </button>

      <button
        type='button'
        onClick={toggleMenu}
        className={styles['menu-item']}
      >
        <Link href='/'>Settings</Link>
      </button>

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
