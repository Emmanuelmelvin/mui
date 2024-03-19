import { IconButton, Tooltip } from '@mui/material'
import {Delete} from '@mui/icons-material'

export const MuiToolTip = () => {
  return (
    <Tooltip 
    placement='right'
    arrow
    enterDelay={500}
    leaveDeley={200}
    title='delete'> 
        <IconButton>
            <Delete/>
        </IconButton>
    </Tooltip>
  )
}
