/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react'

import { useForm } from 'react-hook-form'
import { Input, Button, UnstyledButton } from '@mantine/core'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import styles from '../assets/styles/components/updatepassword.module.css'


import buttonStyle from '../components/core/buttonStyle'

const UpdatePassword = () => {
  const [message, setMessage] = useState('')
  const [passwordShow1, setPasswordShow1] = useState(true)
  const [passwordShow2, setPasswordShow2] = useState(true)
  const [passwordShow3, setPasswordShow3] = useState(true)
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
    // <div className={styles.container}>

    //   <form
        
    //     className={styles['password-details']}
    //   >
    //     <div>
    //       <h3 className={styles.text}>Change password</h3>

    //       <Input
    //         className={styles.pwd}
    //         type='password'
    //         {...register('password', {
    //           required: 'You must specify a password',
    //           minLength: {
    //             value: 8,
    //             message: 'Password must have at least 8 characters'
    //           }
    //         })}
    //         placeholder='Enter current password..'
    //       />
    //       {errors.password && <p>{errors.password.message}</p>}

    //       <Input
    //         className={styles.pwd}
    //         type='password'
    //         {...register('password', {
    //           required: 'You must specify a password',
    //           minLength: {
    //             value: 8,
    //             message: 'Password must have at least 8 characters'
    //           }
    //         })}
    //         placeholder='Enter new password..'
    //       />
    //       {errors.password && <p>{errors.password.message}</p>}

    //       <Input
    //         type='password'
    //         {...register('confirm_password', {
    //           validate: (value) =>
    //             value === password.current || 'The passwords do not match'
    //         })}
    //         className={styles.pwd}
    //         placeholder='Confirm password..'
    //       />
    //       {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
    //       <Button sx={buttonStyle} type='submit'
    //        onClick={handleSubmit(onSubmit)}>
    //       {' '}
    //       Change Password
    //     </Button>
    //     </div>
    //   </form>
    // </div>

<div className={styles.container}>
<form
  className={styles['password-details']}
  // onSubmit={handleSubmit(updatePassword)}
>
  <p className={styles.text}>Change password</p>
  <Input
    className={styles.pwd}
    type={passwordShow1 ? 'password' : null}
    {...register('current_password')}
    placeholder='Enter current password...'
    required
    rightSection={
      <UnstyledButton
        onClick={() => {
          setPasswordShow1(!passwordShow1)
        }}
      >
        {passwordShow1 ? <BsEyeSlashFill /> : <BsEyeFill />}
      </UnstyledButton>
    }
  />
  {errors.password && <p>{errors.password.message}</p>}
  <Input
    className={styles.pwd}
    type={passwordShow2 ? 'password' : null}
    {...register('password')}
    placeholder='Enter new password...'
    required
    rightSection={
      <UnstyledButton
        onClick={() => {
          setPasswordShow2(!passwordShow2)
        }}
      >
        {passwordShow2 ? <BsEyeSlashFill /> : <BsEyeFill />}
      </UnstyledButton>
    }
  />
  {errors.password && <p>{errors.password.message}</p>}
  <Input
    className={styles.pwd}
    type={passwordShow3 ? 'password' : null}
    {...register('confirm_password')}
    placeholder='Confirm new password...'
    required
    rightSection={
      <UnstyledButton
        onClick={() => {
          setPasswordShow3(!passwordShow3)
        }}
      >
        {passwordShow3 ? <BsEyeSlashFill /> : <BsEyeFill />}
      </UnstyledButton>
    }
  />
  {errors.password && <p>{errors.password.message}</p>}
  <div>
    <Button sx={buttonStyle} type='submit'
    onClick={handleSubmit(onSubmit)}>
      Change password
    </Button>
  </div>
</form>
</div>
  )
}

export default UpdatePassword
