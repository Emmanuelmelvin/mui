import { Snackbar, Button, Alert } from '@mui/material'
import {useState, forwardRef} from 'react'

const SnackbarAlert = forwardRef(
   function  SnackbarAlert(props, ref) {
    return <Alert  elevation={6} ref ={ref} {...props}/>
   }
)

export const MuiSnackBar  = () => { 
    const [open , SetOpen] = useState(false)
    const handleClose = (_event , reason) => {
       if(reason === 'clickaway') {
        return
       }
       SetOpen(false) 
    }
  return (
    <>
    <Button
    variant='filled'
    sx={{padding: '5px' , bgcolor: 'white'}}
    onClick={() => SetOpen(true)}
    >Submit</Button>

    {/* <Snackbar 
    open={open}
    onClose={handleClose}
    message='Form Submitted Successfully'
    autoHideDuration={4000}
    anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
    }}
    /> */}
    <Snackbar
     open={open} 
     autoHideDuration={6000} 
     anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
    }}
     onClose={handleClose}>
        <SnackbarAlert 
        severity='success' onClose={handleClose}>
            Form Submitted Successfully
        </SnackbarAlert>
    </Snackbar>
    </>
  )
}
