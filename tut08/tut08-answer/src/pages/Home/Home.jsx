import React, { useState } from 'react';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { FlexyBox } from './styles';
import StoreContext from '../../contexts/context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { 
    token: [token, setToken],
  } = React.useContext(StoreContext);

  useEffect(() => {
    console.log('token', token);
  }, [token]);

  return (
    <FlexyBox>
      <Paper elevation={3}>
        <TextField 
          autoComplete='true' 
          autoFocus={true}
          variant='outlined'
          label='Username'
          type='text'
          required={true}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField 
          autoComplete='true' 
          autoFocus={true}
          variant='outlined'
          label='Password'
          type='password'
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button 
          onClick={() => {
            if (username === 'admin' && password === 'admin') {
              setToken(`Token is: ${username}, ${password}`);
            } else {
              setToken('');
            }
            navigate('/dashboard');
          }}
        >
          Login
        </Button>
      </Paper>
    </FlexyBox>
  );
}

export default Home;
