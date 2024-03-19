import { Box , FormControlLabel , Switch} from '@mui/material'
import {useState} from 'react'

export const MuiSwitch = () => {
    const [mode , setMode] = useState(false)
    const handleChange = (event) => {
        setMode(event.target.checked)
    }
    console.log({mode,})
  return (
    <Box>
            <FormControlLabel 
            control={<Switch
            onChange={handleChange}
            checked={mode}
            />}
            label='Dark Mode'/>
    </Box>
  )
}


