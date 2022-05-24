import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@mantine/core'
import styles from '../../assets/styles/layout/mobilefooter.module.css'
import arrowIcon from '../../assets/icons/arrow.svg'

const MobileFooter = () => {
  return (
    <div className={styles['l-footer']}>
      <div className={styles['l-footer-wrapper']}>
        <div className={styles['l-footer-invite-wrapper']}>
          <div className={styles['l-footer-invite-wrapper-text']}>
            <div className={styles['l-footer-text-invite']}>
              <p className={styles['l-footer-text-invite-one']}>Invite</p>
              <p className={styles['l-footer-text-invite-two']}>a</p>
              <span className={styles['l-footer-text-invite-three']}>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 100,
                    strings: [
                      'Doctor',
                      'Patient',
                      'Pharmacy',
                      'Laboratory',
                      'Pharmacist'
                    ]
                  }}
                />
              </span>
            </div>
            <Link
              className={styles['l-footer-invite-link']}
              href='/tellafriend'
              passHref
            >
              <Button
                radius='lg'
                styles={() => ({
                  root: { color: 'black', backgroundColor: '#a5e0d5' }
                })}
              >
                <span className={styles['l-footer-invite-link-text']}>
                  Invite
                </span>
                <Image
                  className={styles['l-footer-invite-link-icon']}
                  src={arrowIcon}
                  alt=''
                />
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles['l-footer-copyright-wrapper']}>
          <p className={styles['l-footer-copyright-powered']}>
          Powered by APOTEK PHARMA AB
          </p>
          <div className={styles['l-footer-copyright-divider']} />
          <p className={styles['l-footer-copyright-brand']}>
            &copy; 2022 Apotek Pharma Sweden. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MobileFooter
