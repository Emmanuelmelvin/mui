import { Grid , Box } from '@mui/material'
import React from 'react'
// my and mx helps to set marging to the grid container
//uses the flexbox module
//the grid consists of 12 columns grid layout
// there are 5 break points
// xs for mobile and above until stated
//sm for tablet and above until stated
//md for desktop and above until stated
//set xs to auto to allows item determine its width based on the width of its content
//lg and xl for lerger monitors only
export const MuiGrid = () => {
  return (
    <>
      <Grid container  columnSpacing={1} rowSpacing={2}>
        <Grid item xs={6}>
            <Box 
            bgcolor='primary.light'p={2}  >Item 1</Box>
        </Grid>
        <Grid item xs={6}>
            <Box bgcolor='primary.light'p={2} >Item 2</Box>
        </Grid>
        <Grid item xs={6} >
            <Box bgcolor='primary.light'p={2} >Item 3</Box>
        </Grid>
        <Grid item xs={6}>
            <Box bgcolor='primary.light' p={2}>Item 4</Box>
        </Grid>
      </Grid>
    </>
  )
}

