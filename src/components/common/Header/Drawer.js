import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';


export default function TemporaryDrawer() {
const [open, setOpen] = useState(false)

  return (
    <div>
          <IconButton onClick={()=>setOpen(true)}><MenuIcon className="link" /></IconButton>
          <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
            <div className='drawer-container'>
                <a href='/'><p className='link'>Home</p></a>
                <a href='/'><p className='link'>Compare</p></a>
                <a href='/'><p className='link'>WatchList</p></a>
            </div>
            
          </Drawer>
    </div>
  );
}
