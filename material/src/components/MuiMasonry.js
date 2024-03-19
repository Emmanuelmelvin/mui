import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from '@mui/material'
import {Masonry} from '@mui/lab'
import {ExpandMore} from '@mui/icons-material'
import React from 'react'

const heights = [  150, 30, 70, 110, 80, 50, 25, 90, 100, 150, 30, 50, 80 ]

export const MuiMasonry = () => {
  return (
    <Box sx={{width: 500 , minHeight: 400}}>
        <Masonry>
            {
                heights.map((height , index) => (
                    <Paper key={index} 
                    sx={{
                    // display: 'flex' , 
                    // justifyContent: 'center' ,
                    // alignItems: 'center' , 
                    // height ,
                    border: '1px solid'}}>
                    <Accordion sx={{minHeight: height}}>
                        <AccordionSummary expandIcon={<ExpandMore/>}>
                            <Typography>Accordion {index + 1}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Content</Typography>
                        </AccordionDetails>
                    </Accordion>
                    </Paper>
                ))
            }
        </Masonry>
    </Box>
  )
}


