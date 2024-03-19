import { Chip, Stack , Avatar} from "@mui/material"
import {Face} from '@mui/icons-material'
import {useState} from 'react'
//variant is outlined or filled

const name = 'Delete'
export const MuiChip = () => {

    const [chips, setChips] = useState(['Chip 1' , 'Chip 2' , 'Chip 3'])

  return (
    <Stack direction='row' spacing={1}>
        <Chip 
        label='Chip  Outlined'
        color='secondary' 
        size='small' 
        avatar={<Avatar>V</Avatar>}
        variant='outlined'  />

        <Chip 
        label='Chip  Outlined' 
        color='error'
        icon={<Face/>}
        variant='outlined'  />

        <Chip 
        label='Click' 
        color='success' 
        size='small' 
        icon={<Face/>}
        onClick={() => alert('Clicked')}
        variant='outlined'  />

        <Chip 
        label={name}
        color='error' 
        size='small'
        onClick={() => alert('Clicked')} 
        onDelete={() => alert('Delete Handler Called')} />

        {
            chips.map((chip) => (
                <Chip label={chip} 
                onDelete={() => setChips(chips.filter(chipToDelete => {return chipToDelete !== chip}))}
                size='small'/>
            ))
        }
    </Stack>
  )
}

