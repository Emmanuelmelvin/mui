import { Stack, ImageList , ImageListItem } from '@mui/material'
import React from 'react'

export const MuiImageList = () => {
  return (  
    <Stack spacing={4}>
      <ImageList
      sx={{
        width: 400,
        height: 500
      }}
      cols={3}
      rowHeight={164}
      >
            {
                itemData.map((item) => (
                    <ImageListItem key={item.title}>
                        <img 
                        src={item.img}
                        alt={item.title}
                        loading='lazy'
                        />
                    </ImageListItem>
                ))
            }
      </ImageList>
    </Stack>
  )
}


const itemData = [
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random1'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random2'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random3'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random4'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random5'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random6'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random7'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random8'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random9'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random10'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random11'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random12'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random13'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random14'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random15'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random16'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Random17'
    }
]
