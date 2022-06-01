import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Input, Button} from '@mantine/core'
import buttonStyle from '../components/core/buttonStyle'
import styles from '../assets/styles/components/login.module.css';

async function loginUser(credentials) {
 return fetch('http://localhost:8082/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className={styles["login-wrapper"]}>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p className={styles.heading}>Username</p>
          <Input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p className={styles.heading}>Password</p>
          <Input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div className = {styles.buttonM}>
          <Button sx={buttonStyle} type="submit">
          {' '}
            Submit
            </Button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};