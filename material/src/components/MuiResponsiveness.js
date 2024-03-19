import { Box , styled } from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)(({theme}) =>({
    height: '250px',
    width: '250px',
    bgcolor: theme.primary.main
}))

export const MuiResponsiveness = () => {
  return (
    // <Box sx={{
    //     height: '500px',
    //     width: {
    //         xs: 100, //0 above
    //         sm: 200, //600 and above
    //         md: 300, //900 and above
    //         lg: 400, //1200 and above
    //         xl: 500 //1536 and above
    //     }, 
    //     bgcolor: 'secondary.abstract'
    // }}>
      
    // </Box>
    <StyledBox/>
  )
}
