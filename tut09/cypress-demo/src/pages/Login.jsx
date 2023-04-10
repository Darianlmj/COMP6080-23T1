import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import {
  Container,
  Card,
  Typography,
  FormControl,
  Input,
  InputLabel,
  Button
} from '@mui/material';


export const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Logs validates the user's credentials and attempts to log them in
  const loginUser = () => {
    // Totally not a wrong way to log in xP.
    navigate('/dashboard');
  }

  const validateInput = () => {
    if (username === '' || password === '') {
      setError(true);
    } else {
      navigate('/dashboard');
      loginUser();
    }
  }

  return (
    <div>
      <NavigationBar />
      <Container maxWidth='sm'>
        <Card sx={{ padding: '40px', textAlign: 'center', margin: '40% 0' }}>
          <Typography variant='h3'>Log in</Typography>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              placeholder="example@email.com"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              autoFocus
              placeholder="*****"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button 
            name='submit' 
            variant="contained" 
            sx={{ "marginBottom": "2rem" }} 
            onClick={() => validateInput()} 
            fullWidth
          >
            LogIn
          </Button>
          {
            error &&
            <Container sx={{ backgroundColor: '#F1B2B4' }}>
              <Typography variant='h6' color='error'>Please enter a valid username and password</Typography>
            </Container>
          }
        </Card>
      </Container>
    </div>
  )
}