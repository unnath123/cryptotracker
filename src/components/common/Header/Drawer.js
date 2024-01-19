import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom'


export default function TemporaryDrawer() {
const [open, setOpen] = useState(false)

  return (
    <div>
          <IconButton onClick={()=>setOpen(true)}><MenuIcon className="link" /></IconButton>
          <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
            <div className='drawer-container'>
                <Link to='/'><p className='link'>Home</p></Link>
                <Link to='/Compare'><p className='link'>Compare</p></Link>
                <Link to='/Watchlist'><p className='link'>WatchList</p></Link>
                <Link to='/Dashboard'><p className='link'>Dashboard</p></Link>
            </div>
            
          </Drawer>
    </div>
  );
}
