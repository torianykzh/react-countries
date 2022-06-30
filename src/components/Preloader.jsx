import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './preloader_style.scss'

export default function Preloader() {
  return (
    <div className='preloader'>
      <CircularProgress />
    </div>
  );
}