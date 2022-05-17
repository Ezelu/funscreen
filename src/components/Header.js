
import React from 'react';
import '../styles/header.css';
import { Movie } from '@mui/icons-material'


export default function Header () {

  return (
    <div className='header'>
      <h1 onClick={() => window.scroll(0, 0)}> Fun Screen </h1>
   </div>
  )
}