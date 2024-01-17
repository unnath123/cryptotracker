import React from 'react'
import TemporaryDrawer from './Drawer.js'
import Button from '../Button/index.js'
import './styles.css'

const index = () => {
  return (
    <div className='navbar'>
        <h1 className='logo'>CryptoTracker. <span style={{color:"blue"}}></span></h1>
        <div className='links'>
            <a href='/'><p className='link'>Home</p></a>
            <a href='/'><p className='link'>Compare</p></a>
            <a href='/'><p className='link'>WatchList</p></a>
            
        </div>
        <div className='drawer'>
            <TemporaryDrawer />
        </div>
    </div>
  )
}

export default index