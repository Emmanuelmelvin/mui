import { Box , Tab } from '@mui/material'
import { TabContext , TabList , TabPanel } from '@mui/lab'
import {useState} from 'react'

export const MuiTabs = () => {

    const [value , setValue] = useState('1')
    const handleChange = (_event , newValue) => {
        setValue(newValue)
    }

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto'
        }}>
            <TabList 
            onChange={handleChange}
            aria-label='tlabs example'>
                <Tab label='Tab One' value='1'/>
                <Tab label='Tab Two' value='2'/>
                <Tab label='Tab Three' value='3'/>

            </TabList>
        </Box>
        <TabPanel value='1'>Panel One</TabPanel>
        <TabPanel value='2'>Panel 2</TabPanel>
        <TabPanel value='3'>Panel 3</TabPanel>
      </TabContext>
    </Box>
  )}
