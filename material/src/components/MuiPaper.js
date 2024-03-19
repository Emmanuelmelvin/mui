import { Paper , Box } from '@mui/material'
import React from 'react'

export const MuiPaper = () => {
  return (
    <Paper 
    elevation={4}
    sx={{padding:'32px'}}>
    <Box
      p={2}
      width='100px'
      height='100px'
      bgcolor='success.light'
      >Mr. <br/> Emmanuel <br/> Chidi</Box>
    </Paper>
  )
}

