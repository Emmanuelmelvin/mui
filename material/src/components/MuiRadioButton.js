import { Box, FormControl , FormLabel, FormControlLabel , RadioGroup , Radio , FormHelperText } from '@mui/material'
import {useState} from 'react'
//the row allows horizontal alignment  
export const MuiRadioButton = () => {
    const [value , setValue] = useState('')
    console.log({value})
    const handleChange = (event) => {
        setValue(event.target.value)
    }
  return (
    <Box>
        <FormControl>
            <FormLabel id ='job-experience-group-label'>
                  <strong>Years of Experience</strong>  
            </FormLabel>
            <RadioGroup 
            aria-label ='job-experience-group-label'
            name ='job-experience-group'
            value={value}
            onChange={handleChange}
            row
            >
                <FormControlLabel 
                label='0-2'
                value = '0-2'
                control={<Radio size='medium' color='secondary'/>}/>
                  <FormControlLabel 
                label='3-5'
                value = '3-5'
                control={<Radio/>}/>
                  <FormControlLabel 
                label='6-8'
                value = '6-8'
                control={<Radio/>}/>
            </RadioGroup>
            <FormHelperText>{!value? 'Please Select from Option':'Thank you'}</FormHelperText>
        </FormControl>
    </Box>
  )
}


