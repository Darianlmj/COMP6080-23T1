import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar';
import {
  Container,
  Typography,
} from '@mui/material';

export const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Container 
        maxWidth='sm' 
        sx={{"height": "100vh", "display": "flex", "justify-content": "center", "align-items": "center"}}
      >
        <Typography variant='h4'>Home Page</Typography>
      </Container>
    </div>
  )
}