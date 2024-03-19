import { Autocomplete, Stack, TextField } from '@mui/material'
import {useState} from 'react'
//freeSolo prop allows you to enter free text.

const skills = ['React' , 'CSS' , 'JavaScript' , 'HTML' , 'Crypto' , 'TypeScript']

const skillsOptions = skills.map((skill , index) => ({
    id: index + 1,
    label: skill
}))

export const MuiAutoComplete = () => {

  const [value , setValue] = useState(null)
  const [skill , setSkill] = useState(null)

  const handleChange = (_event , newValue) => {
    setValue(newValue)
  }

  const handleSkill = (_event , newValue) => {
      setSkill(newValue)
  } 


  return (
    <Stack spacing={2} width='250px'>
        <Autocomplete 
        options={skills}
        renderInput = { (params) => <TextField {...params}  label='Skills'/>} 
        value={value}
        onChange={handleChange}
        freeSolo
        />

        <Autocomplete 
        options={skillsOptions}
        renderInput = { (params) => <TextField {...params}  label='HTML'/>} 
        value={skill}
        onChange={handleSkill}
        freeSolo
        />
    </Stack>
  )
}
