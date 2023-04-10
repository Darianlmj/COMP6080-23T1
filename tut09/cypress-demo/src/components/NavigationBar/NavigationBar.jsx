import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import styles from './NavigationBar.module.css'

const NavigationBar = () => {
  const navigate = useNavigate();

  // Logs the user out.
  const logout = async () => {
    navigate('/');
  };

  return (
    <div id={styles.websiteContainer}>
      <Container maxWidth='sm' id={styles.contentContainer}>
        <div>
          <h1 id={styles.brandName}>CypressDemo</h1>
        </div>
        <div>
          <Button name="logout-button" variant="contained" color="primary" onClick={() => logout()}>
            Log Out
          </Button>
          <Button name="login-button" id={styles.navLogInButton} variant="text" color="primary" onClick={() => navigate('/login')}>
            Log In
          </Button>
        </div>

      </Container>
    </div>
  )
}

export default NavigationBar