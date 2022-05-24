/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { Input } from '@mantine/core'
import Carbon from '../assets/icons/carbonCertificate.svg'
import Person from '../assets/icons/person.svg'
import EmailIcon from '../assets/icons/emailIcon.svg'
import TelPerson from '../assets/icons/telPerson.svg'
import styles from '../assets/styles/components/updatepassword.module.css'
import GroupOfPersons from '../assets/icons/groupOfPersons.svg'

const UpdatePassword = () => {
  const [message, setMessage] = useState('')
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({})
  const password = useRef({})
  password.current = watch('password', '')
  const onSubmit = (data) => {
    console.log(data)
    setMessage('Your password updated successfully')
    reset()
  }
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <Image src={Carbon} />
          <h3>Title:</h3>
          <p>Pharm.D</p>
        </div>
        <div>
          <Image src={Person} />
          <h3>Full name:</h3>
          <p>Alice Jonas</p>
        </div>
        <div>
          <Image src={EmailIcon} />
          <h3>Email:</h3>
          <p>alice.l@gmail.com</p>
        </div>
        <div>
          <Image src={TelPerson} />
          <h3>Phone number:</h3>
          <p>+4676233650</p>
        </div>
        <div>
          <Image src={GroupOfPersons} />
          <h3>Role:</h3>
          <p>Pharmacist</p>
        </div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className={styles['password-details']}
      >
        <div>
          <h3 className={styles.text}>Change password</h3>

          <Input
            className={styles.pwd}
            type='password'
            {...register('password', {
              required: 'You must specify a password',
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters'
              }
            })}
            placeholder='Enter current password..'
          />
          {errors.password && <p>{errors.password.message}</p>}

          <Input
            className={styles.pwd}
            type='password'
            {...register('password', {
              required: 'You must specify a password',
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters'
              }
            })}
            placeholder='Enter new password..'
          />
          {errors.password && <p>{errors.password.message}</p>}

          <Input
            type='password'
            {...register('confirm_password', {
              validate: (value) =>
                value === password.current || 'The passwords do not match'
            })}
            className={styles.pwd}
            placeholder='Confirm password..'
          />
          {errors.confirm_password && <p>{errors.confirm_password.message}</p>}

          <Input
            type='submit'
            onClick={handleSubmit(onSubmit)}
            className={styles.submit}
            // placeholder='Change password'
            value='Change password'
          />
        </div>
      </form>
      <div> {message} </div>
    </div>
  )
}

export default UpdatePassword
