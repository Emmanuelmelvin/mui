import {Stack , Box, Divider} from '@mui/material'

export const MuiStack = () => {
  return (
    <Stack 
    direction='row'
    spacing={2}
    divider={<Divider orientation='vertical' flexItem/>}
    sx={{
        border: '1px solid'
     }}>
       <Box 
      sx={{
        width: '100px',
        height: '100px',
        padding: '16px',
        backgroundColor: 'primary.main',
       }}
        component = 'div'>
    </Box>
    <Box
      p={2}
      width='100px'
      height='100px'
      bgcolor='success.light'
      >
      </Box>
    </Stack>
  )
}

