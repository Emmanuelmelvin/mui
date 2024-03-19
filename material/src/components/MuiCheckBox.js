import { Box , FormControlLabel , Checkbox , FormControl , FormLabel , FormGroup, FormHelperText} from '@mui/material'
import {Bookmark , BookmarkBorder} from '@mui/icons-material'
import {useState} from 'react'

export const MuiCheckBox = () => {
    const [accept , setAccept] = useState(false)
    const [skills , setSkills] = useState([])
    console.log({accept})
    console.log({skills})
    const handleChange = (event) => {
        setAccept(event.target.checked)
    }
    const handleSkillChange = (event) => {
        const index = skills.indexOf(event.target.value)
        if(index === -1){
            setSkills([...skills, event.target.value])
        } else{
            setSkills(skills.filter(skill => skill !== event.target.value))
        }
    }
  return (
    <Box>
        <Box>
            <FormControlLabel 
            label='I accept terms and conditions' 
            checked={accept}
            onChange={handleChange}
            control={<Checkbox/>}/>
        </Box>
        <Box>
            <Checkbox
             icon ={<BookmarkBorder/>} 
             checkedIcon ={<Bookmark/>} 
             checked={accept}
             onChange = {handleChange}
             />
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                    <FormControlLabel 
            label='HTML' 
            onChange={handleSkillChange}
            checked={skills.includes('html')}
            control={<Checkbox value='html'/>}/>
             <FormControlLabel 
            label='CSS' 
            onChange={handleSkillChange}
            checked={skills.includes('css')}
            control={<Checkbox value='css'/>}/>
             <FormControlLabel 
            label='JavaScript' 
            onChange={handleSkillChange}
            checked={skills.includes('javascript')}
            control={<Checkbox value = 'javascript'/>}/>
                    </FormGroup>
                    <FormHelperText>Invalid Prompt</FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}

