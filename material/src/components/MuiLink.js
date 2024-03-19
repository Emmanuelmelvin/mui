import {Link, Stack, Typography} from '@mui/material'

export const MuiLink = () => {
    //underline can be set to none
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link href='@' variant='body2'>Link</Link>
        <Link href='@' color='secondary' underline='hover'>Secondary</Link>
        <Typography variant='h6'>
        <Link href='@' color='error' underline='hover'>Secondary</Link>
        </Typography>
    </Stack>
  )
}

