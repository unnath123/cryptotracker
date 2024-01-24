import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import style from './style.css'

export default function Loader() {
  return (
    <div className='loader-container'>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="inherit" />
        </Stack>
    </div>
    
  );
}