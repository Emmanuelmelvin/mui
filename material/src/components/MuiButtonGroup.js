import { Button , ButtonGroup} from '@mui/material'
//onclick prop is specified on the individual button
export const MuiButtonGroup = () => {
  return (
    <div>
        <ButtonGroup 
        variant='contained'
        orientation='vertical'
        size='small'
        arial-label='button group'
        color='secondary'
         >
                <Button onClick={() => alert('Left Clicked')}>Left</Button>
                <Button >Center</Button>
                <Button >Right</Button>
        </ButtonGroup>
    </div>
  )
}

