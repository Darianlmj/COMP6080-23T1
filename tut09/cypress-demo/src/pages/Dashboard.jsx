import React, { useState, useEffect } from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar';
import {
  Container,
  Typography,
} from '@mui/material';

export const Dashboard = () => {
  // Previewing an image
  // Reference: https://stackoverflow.com/questions/38049966/get-image-preview-before-uploading-in-react
  const [selectedFile, setSelectedFile] = useState();
  const [loadImage, setLoadImage] = useState(false);
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
    }

    // I've kept this example simple by using the first image instead of multiple
    setTimeout(() => {
      setSelectedFile(e.target.files[0]);
      setLoadImage(true);
    }, 5000);
  }

  return (
    <div>
      <NavigationBar />
      <Container maxWidth='sm' sx={{"height": "100vh", "display": "flex", "justifyContent": "center", "alignItems": "center"}}>
        <Container maxWidth='sm' sx={{"display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center"}}>
          <Typography variant='h4'>Dashboard</Typography>
          <Typography variant='h6'>Upload an image here</Typography>
          <br></br>
          <input name="image" type='file' onChange={onSelectFile} />
          {
            selectedFile && loadImage && <img alt="uploaded file" name="image-preview" src={preview} />
          }
        </Container>
      </Container>
    </div>
  )
}