import { TextField, MenuItem, Stack} from '@mui/material'
import {useState} from 'react'
// there are 2 methods of doing this.
//use fullwidth to allow the textfield to use the full width of its parent container.
// the selectProps allows you to select more than one item
//the first sample shows how to select just one item
//the seconds shows how to select multiple
const people = [
     {
        name: 'Emmanuel',
        nickname: 'Emma'
    },
    {
        name: 'Victory',
        nickname: 'Vick'
    },
     {
        name: 'Becky',
        nickname: 'Becks'
    },
     {
        name: 'Kehinde',
        nickname: 'Kenny'
    }
]
export const MuiSelect = () => {
    const [country , setCountry] = useState('')
    console.log({country,})
    const handleCountryChange = (event) => {
        setCountry(event.target.value)
    }

    const [team , setTeams] = useState([])
    console.log({team,})
    const handleTeamChange = (event) => {
       const value = event.target.value
       setTeams(typeof value === 'string' ? value.split(',') : value)
    } 

  return (
    <Stack spacing={4} direction='row'> 
        <TextField 
         sx={{
             width:'120px'
         }}
         label='Select a country' 
         helperText='Please select your country'
         error={!country}
         value={country}
         onChange={handleCountryChange}
         select >
           {
            people.map((person , id) => {
               return  <MenuItem key={id} value={person.nickname}>{person.name}</MenuItem>
            })
           }
        </TextField>


        <TextField 
         sx={{
            width:'250px'
         }}
         label='Select a team' 
         value={team}
         onChange={handleTeamChange}
         SelectProps= {{
            multiple: true
         }}
         select >
             <MenuItem value='CHE'>Chelsea</MenuItem>
             <MenuItem value='MUN'>Mannchester United</MenuItem>
             <MenuItem value='MIC'>Manchester City</MenuItem>
             <MenuItem value='BAY'>Bayern</MenuItem>
             <MenuItem value='AST'>Aston Villa</MenuItem>
             <MenuItem value='INT'>Inter</MenuItem>
        </TextField>
    </Stack>
  )
}

