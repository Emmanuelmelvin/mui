import {useState} from 'react'
import { Button, Dialog , DialogTitle, DialogContent , DialogContentText , DialogActions} from '@mui/material'
//dialog interfers with a user's functionality as it requires rge user to select an action
//before proceeding
export const MuiDialog = () => {

    const [open , SetOpen] = useState(false)

  return (
    <>
      <Button
      variant='filled'
       onClick={() => SetOpen(true)}>Open Dialog</Button>
      <Dialog
      open={open} 
      onClose={() => SetOpen(false)}
      aria-labelledby='dialog-title' 
      aria-describedby='dialog-description'>
        <DialogTitle id='dialog-title'>Submit the test</DialogTitle>
        <DialogContent id='dialog-description'>
            <DialogContentText>Are you sure you want to submit. After submission, you cannot edit answers after submision</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={() => SetOpen(false)}>Submit</Button>
            <Button onClick={() => SetOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
