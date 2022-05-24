import Link from 'next/link'
import { useState } from 'react'
import { Modal, Group, Divider, Textarea, Button } from '@mantine/core'
import styles from '../assets/styles/pages/prescriptiondetails.module.css'
import ButtonStyle from '../components/core/buttonStyle'

const PrescriptionDetails = () => {
  const [opened, setOpened] = useState(false)
  const [remarkData, setRemarkData] = useState('')
  const handleSubmit = (e) => {
    setOpened(false)
    setRemarkData(e.target.value)
  }
  console.log(remarkData)
  const data = {
    patientName: 'Matts White',
    patientId: 12345679912,
    illness: 'Full blood count',
    date: '10/03/2022',
    medicationName: 'Deslortadin Sandoz',
    medicationForm: 'Tablet',
    medicationStrength: '5 mg desloratadin',
    medicationDose: '5mg',
    medicationRoute: 'Oral',
    medicationFrequency: 'Once a day',
    medicationRefills: '0',
    medicationQuantity: '1',
    doctorName: 'Acquana Abunami',
    doctorMobileNumber: '789456112',
    doctorId: '123467895'
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Prescription</h4>
        <Divider orientation='horizontal' size={3} className={styles.line} />
      </div>
      <div className={styles['prescription-info']}>
        <div className={styles['patient-info']}>
          <div>
            <h5>Patient Name:</h5>
            <p>{data.patientName}</p>
          </div>
          <div>
            <h5>Patient national id:</h5>
            <p>{data.patientId}</p>
          </div>
          <div>
            <h5>Illness:</h5>
            <p>{data.illness}</p>
          </div>
          <div>
            <h5>Date:</h5>
            <p>{data.date}</p>
          </div>
        </div>
        <Divider orientation='horizontal' size={3} className={styles.line} />
        <div className={styles['patient-info']}>
          <div>
            <h5>Medicine Name:</h5>
            <p> {data.medicationName} </p>
          </div>
          <div>
            <h5>Medicine form:</h5>
            <p> {data.medicationForm} </p>
          </div>
          <div>
            <h5>Medicine strength:</h5>
            <p>{data.medicationStrength} </p>
          </div>
          <div>
            <h5>Medicine dose:</h5>
            <p> {data.medicationDose} </p>
          </div>
          <div>
            <h5>Medicine route:</h5>
            <p> {data.medicationRoute} </p>
          </div>
          <div>
            <h5>Medicine frequency:</h5>
            <p> {data.medicationFrequency} </p>
          </div>
          <div>
            <h5>Medicine refills:</h5>
            <p>{data.medicationRefills}</p>
          </div>
          <div>
            <h5>Medicine quantity:</h5>
            <p>{data.medicationQuantity} </p>
          </div>
        </div>
        <Divider orientation='horizontal' size={3} className={styles.line} />
        <div className={styles['patient-info']}>
          <div>
            <h5>Doctor Name:</h5>
            <p>{data.doctorName}</p>
          </div>
          <div>
            <h5>Doctor national id:</h5>
            <p>{data.doctorId}</p>
          </div>
          <div>
            <h5>Doctor Mobile number:</h5>
            <p>{data.doctorMobileNumber}</p>
          </div>
        </div>
        <div className={styles.modal}>
          <Modal opened={opened} onClose={() => setOpened(false)}>
            <h4 className={styles['remark-heading']}>Add Remark</h4>
            <Textarea
              minRows={5}
              name='remark'
              placeholder='Enter your remarks here ...'
            />
            <div className={styles.feedback}>
              <Button sx={ButtonStyle} onClick={handleSubmit} type='submit'>
                {' '}
                Send remark
              </Button>
            </div>
          </Modal>
        </div>
        <div className={styles['buttons-group']}>
          <Group position='center'>
            <Button
              sx={ButtonStyle}
              onClick={() => setOpened(true)}
              type='submit'
            >
              {' '}
              Flag prescription
            </Button>
          </Group>
          <Link passHref href='/scanProduct'>
            <Button sx={ButtonStyle} type='submit'>
              {' '}
              Next
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PrescriptionDetails
