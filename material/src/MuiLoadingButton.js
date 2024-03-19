import {React , useState} from 'react'
import {Stack} from '@mui/material'
import {LoadingButton} from '@mui/lab'
import {Save} from '@mui/icons-material'

export const MuiLoadingButton = () => {

  const [loading , SetLoading] = useState(false)

  const handleClick = () => {
    SetLoading(true)

    setTimeout(() => {
      SetLoading(false)
    } , 2000)

  }

  return (
    <Stack spacing={2} direction='row'>
        <LoadingButton
        loadingPosition='start'
        startIcon = {<Save/>}
        loading={loading}
        onClick={handleClick}
        variant='outlined'>
        Save </LoadingButton>
    </Stack>
  )
}

 