import { Stack , Skeleton, Box, Avatar, Typography } from '@mui/material'
import {useEffect, useState} from 'react'

export const MuiSkeleton = () => {
    //defaault variant of skeletonn is text

    const [loading , SetLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
                SetLoading(false)
        }, 10000);
    } , [])
  return (
    <Box sx={{width: '250px'}}>
        {
            loading? (
                <Skeleton
                 animation='wave'
                width={256}
                height={144}
                variant='rectangular'
                  />
            ): (
                <img
                src='https://source.unsplash.com/random'
                alt='Prope of me'
                width={256}
                height={144}
                />
            )
        }
            <Stack 
            spacing={1}
            sx={{width: '100%' , marginTop: '12px'}}
            direction='row'>
            {
                loading? ( 
                    <Skeleton variant='circular'  width={40} height={40} animation='wave'/>
                ): (
                    <Avatar>V</Avatar>
                )
            }     
            <Stack sx={{width: '80%'}}>
                {
                    loading? (
                        <>
                        <Typography variant='body1'>
                            <Skeleton variant='text' width='100%'animation='wave'/>
                        </Typography>
                        <Typography variant='body2'>
                            <Skeleton variant='text' width='100%'  animation='wave'/>
                        </Typography>
                        </>
                    ):(
                        <Typography variant='body1'>React Mui Tutorial</Typography>
                    )
                }
                </Stack>                                
            </Stack>
    </Box>
//     <Stack spacing={1} width='250px'>
//       <Skeleton variantn='text' animation='wave'/>
//       <Skeleton variant='circular' width={40} height={40}/>
//       <Skeleton variantn='rectangular' width={250} height={125}/>
//     </Stack>
  )
}


