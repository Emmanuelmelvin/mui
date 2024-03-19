import { Box, Button, Card, CardActions, CardContent , Typography, CardMedia } from '@mui/material'
import React from 'react'
// media, content and actions.
export const MuiCard = () => {
  return (
    <Box width='300 px'>
        <Card>
          <CardMedia
          component='img'
          height='140'
          image='https://source.unsplash.com/random'
          alt='Image'
          />
            <CardContent>
                <Typography gutterBottom variant='h5'>Mr. Stevens Adam Chidi</Typography>
                <Typography variant='body2' color='text.secondary'>
                  Pariatur labore dolore deserunt magna nulla dolore <br/>
                  sint eiusmod aliqua nostrud cillum.
                </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}


