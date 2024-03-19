import { Avatar, Stack, AvatarGroup  } from "@mui/material"


export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction ='row' spacing={1}>
            <Avatar sx={{bgcolor: 'primary.light'}}>EC</Avatar>
            <Avatar sx={{bgcolor: 'error.light'}}>MD</Avatar>
            <Avatar sx={{bgcolor: 'success.light'}}>DE</Avatar>
        </Stack>
        <Stack direction ='row' spacing={1}>
            <AvatarGroup max={2}>
            <Avatar src='' alt='Mark Kent'/>
            <Avatar src='' alt='John Doe' />
            <Avatar sx={{bgColor: 'success.light'}}>DE</Avatar>
            </AvatarGroup>
        </Stack>
        <Stack direction ='row' spacing={1}>
            <Avatar variant='square' sx={{bgcolor: 'error.light', width: 48, height: 48}}>MD</Avatar>
            <Avatar variant='rounded' sx={{bgcolor: 'success.light' , width: 48 , height: 48}}>DE</Avatar>
        </Stack>
    </Stack>
  )
}

