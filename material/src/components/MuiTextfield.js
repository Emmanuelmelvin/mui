import { Stack, TextField, InputAdornment } from '@mui/material'
import {useState} from 'react'
//there are 3 variants standard, outlined or filled
//change size using the medium, large and small
//required props adds an astericks to the label
//helperText adds a help text to the textfield.
//inputadornment can also be icons
export const MuiTextfield = () => {
    const [value , setValue] = useState('')
    const handleChange = (event) => {
        setValue(event.target.value)
    }
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
             <TextField label='name' variant='outlined' /> 
             <TextField label='phone' variant='standard'/>
             <TextField label='address' variant='filled'/>
      </Stack> 
      <Stack direction='row' spacing={2}>
            <TextField 
            label='form' 
             value={value}
             required
             onChange={handleChange}
             error={!value }
             helperText={!value ? 'Required' : 'Keep password safe'}
             />
            <TextField label='form' required  helperText='Do not share passcodes'/>
            <TextField label='password' type='password' helperText='Ensure to secure'  disabled/>
            <TextField color='secondary' size='small' label='small'/>
            <TextField label='read only' value='You cannot read' InputProps={{readOnly: 'true'}}  />
      </Stack>
      <Stack direction='row'>
      <TextField label='Amount' 
      InputProps={{
        startAdornment: <InputAdornment position = 'start'> $</InputAdornment>
      }}
       />
      <TextField label='Weight' 
      InputProps = {{
        endAdornment: <InputAdornment position='end'>kg</InputAdornment>
      }}
       />
      </Stack>
    </Stack>
  )
}


