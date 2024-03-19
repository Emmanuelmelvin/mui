import { Box } from '@mui/material'
import React from 'react'
// to see a full list of system properties provided my MUI, go the the website www.mui.com and navigate to system > properties
export const MuiBox = () => {
  return (
    <>
    <Box 
      sx={{
        width: '100px',
        height: '100px',
        padding: '16px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        backgroundColor: 'primary.main',
        "&:hover" : {
            backgroundColor: 'secondary.main',
            border: '2px solid black',
        }
       }}
        component = 'div'>Mr. <br/>Chidi <br/> Emmanuel.
    </Box>
    <Box
      p={2}
      width='100px'
      height='100px'
      bgcolor='success.light'
      sx={{
        borderBottomRightRadius: '10px',
       borderBottomLeftRadius: '10px'
        }}
      >Mr. <br/> Emmanuel <br/> Chidi</Box>
    </>
  )
}

