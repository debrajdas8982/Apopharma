/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link'
import { Divider } from '@mantine/core'
import styles from '../assets/styles/pages/scanproduct.module.css'
import Button from '../components/interactive/button'

const ScanProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Scan Product</h4>
      </div>
      <Divider orientation='horizontal' size={3} className={styles.line} />
      <div className={styles.text}>
        <p>
          Explainatore text here of how the Pharmacist scans the product before
          closing the prescription. After this step the Patient have accsess to
          the prescription and can collect the medicin in a nearby Pharmacy.
        </p>
      </div>
      <Link passHref href='/'>
        <Button label='Close Prescription' />
      </Link>
    </div>
  )
}

export default ScanProduct
