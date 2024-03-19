import { Badge , Stack } from "@mui/material"
import {Mail} from '@mui/icons-material'

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Badge badgeContent={4} color='success'>
                <Mail/>
        </Badge>
        <Badge badgeContent={0} color='secondary' showZero>
                <Mail/>
        </Badge>
        <Badge badgeContent={100} max={999} color='secondary' showZero>
                <Mail/>
        </Badge>
        <Badge variant='dot' color='secondary' invisible={true}>
                <Mail/>
        </Badge>
    </Stack>
  )
}
