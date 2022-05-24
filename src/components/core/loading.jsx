import Image from 'next/image'
import styles from '../../assets/styles/components/loading.module.css'
import circle from '../../assets/images/spinning-circles.svg'

export default function Loading({ size = 128, text = '' }) {
  return (
    <div className={styles['loading-circle']}>
      <Image src={circle} alt='spinner' width={size} height={size} />
      {text && <p>{text}</p>}
    </div>
  )
}
