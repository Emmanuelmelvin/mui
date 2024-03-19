import { Alert, AlertTitle, Stack, Button } from '@mui/material'
import {Check} from '@mui/icons-material'

export const MuiAlert = () => {

  return (
    <Stack spacing={2}>
        <Alert severity='error'> This is an Error Alert</Alert>
        <Alert severity='warning'> This is an warning Alert</Alert>
        <Alert severity='info'> This is an Info Alert</Alert>
        <Alert severity='success'> This is an Success Alert</Alert>

        <Alert variant='outlined' severity='error'> This is an Error Alert</Alert>
        <Alert variant='outlined' severity='warning'> This is an warning Alert</Alert>
        <Alert variant='outlined' severity='info'> This is an Info Alert</Alert>
        <Alert variant='outlined' severity='success'> This is an Success Alert</Alert>

        <Alert variant='filled' severity='warning'> 
        <AlertTitle>Warning</AlertTitle>
        This is an warning Alert</Alert>
        
        <Alert  variant='filled'severity='info'> 
        <AlertTitle>Info</AlertTitle>
        This is an Info Alert</Alert>

        <Alert  
        variant='filled'
        severity='success' 
        action={   <Button size='small' color='inherit'>UNDO</Button>}
        icon={<Check fontSize='inherit'/>}> 
        <AlertTitle>Success</AlertTitle>
       This is an Success Alert
        </Alert>
        
        <Alert  variant='filled'severity='error'>
        <AlertTitle>Error</AlertTitle>
             This is an Error Alert</Alert>
    </Stack>
  )
}

