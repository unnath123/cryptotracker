import  React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Grid from '../Grid'
import List from '../List'
import style from './style.css'

const TabsComponent = ({coins}) =>{
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color:"var(--white)",
    width:"50vw",
    fontSize:"1.2rem",
    fontWeight:600,
    fontFamily:"Inter",
    textTransform:"capitalise"
  }

  const theme = createTheme({
    palette:{
      primary:{
        main:"#3a80e9",
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList  onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="1" sx={style} />
            <Tab label="List" value="2" sx={style} />
          </TabList>
        <TabPanel value="1">
          <div className="grid-flex">
            {
              coins.map((coin, i)=>(
                <Grid  coin={coin} key={i}/>
              ))
            }
          </div>
        </TabPanel>
        <TabPanel value="2">
          <table className='list-table'>
          {
              coins.map((coin, i)=>(
                <List  coin={coin} key={i}/>
              ))
            }
          </table>  
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}

export default TabsComponent