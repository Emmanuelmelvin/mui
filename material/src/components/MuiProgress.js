import { CircularProgress, LinearProgress, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const MuiProgress = () => {
    const [timer , SetTimer] = useState(10)
   useEffect(() => {
    const checkLoader =() => {
        SetTimer(timer => timer +=10)}
   setInterval(checkLoader, 2000)})
  return (
    <Stack spacing={2}>
        <CircularProgress
        variant='determinate'
        value={timer}
         color='success' />
         
         <LinearProgress />
      
    </Stack>
  )
}


