import { Button , Stack , IconButton} from "@mui/material"
import {Send} from "@mui/icons-material"
// it has 3 variants
//text
//contained primary actions like login 
//outlined
//colour types include primary,secondary, error,success,warning,info
//use the size prop to change the size of the button
//disableElevation prop is used to remove the elevation of a button
//disableRipple is used to disable the ripple when clicked on a button
//handle click events using the onClick props
export const MuIButton = () => {
  return (
    <Stack spacing={4}>
    <Stack spacing={2} direction ='row'>
      <Button variant="text" href='https://google.com' >Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
            <Button  variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='success'>Success</Button>
    </Stack>
    <Stack display='block' spacing={2} direction='row'>
             <Button 
             variant='contained' 
             size='small' 
             startIcon={<Send/>} 
             onClick={() => alert('Clicked')}>Small
             </Button>
            <Button 
            variant='contained' s
            ize='medium' 
            endIcon={<Send/>}>
                Medium
                </Button>
            <Button 
            variant='contained' 
            size='large' 
            disableElevation 
            disableRipple> 
            Success
            </Button>
            <IconButton 
            arial-label='send' 
            color='success' 
            size='large'>
                <Send/>
            </IconButton>
    </Stack>
    </Stack>
  )
}

