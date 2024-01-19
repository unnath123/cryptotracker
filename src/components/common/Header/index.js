import React from 'react'
import TemporaryDrawer from './Drawer.js'
import Button from '../Button/index.js'
import './styles.css'
import { Link } from 'react-router-dom'
import { Dashboard } from '@mui/icons-material'

const index = () => {
  return (
    <div className='navbar'>
        <h1 className='logo'>CryptoTracker.<span style={{color:"blue"}}></span></h1>
        <div className='links'>
            <Link to='/'><p className='link'>Home</p></Link>
            <Link to='/Compare'><p className='link'>Compare</p></Link>
            <Link to='/Watchlist'><p className='link'>WatchList</p></Link>
            <Link to='/Dashboard'>
              <Button text={'Dashboard'}></Button>
            </Link> 
        </div>
        <div className='drawer'>
            <TemporaryDrawer />
        </div>
    </div>
  )
}

export default index