import {React , useState} from 'react'
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material"
import {FormatBold, FormatItalic, FormatUnderlined} from "@mui/icons-material"

export const MuIToggleButton = () => {
    const [formats , setFormats] = useState([])
    console.log({formats,})
    const handleFormatChange = (_event , updatedFormats) => {
        setFormats(updatedFormats) 
    }
  return (
    <Stack>
        <ToggleButtonGroup
        aria-label='text formatting'
        value={formats}
        onChange = {handleFormatChange}
        >
            <ToggleButton  
             value='Bold' 
             aria-label="bold"><FormatBold/>
            </ToggleButton>
                
            <ToggleButton
             value='Underlined' 
             aria-label="underlined"><FormatUnderlined/>
            </ToggleButton>

            <ToggleButton 
             value='Italics' 
             aria-label='italics'><FormatItalic/>
            </ToggleButton>
        </ToggleButtonGroup>
    </Stack>
  )
}
