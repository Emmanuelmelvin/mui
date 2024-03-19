import {CatchingPokemon} from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography, Button, Stack } from '@mui/material'

export const MuiNavBar = () => {
  return (
    <AppBar position='static'>
            <Toolbar>
                <IconButton 
                    size='large' 
                    edge='start'
                    color='inherit' 
                    aria-label='logo'>
                    <CatchingPokemon/>
                </IconButton>
                <Typography 
                sx={{
                    flexGrow: 1
                }}
                    component='div'
                    variant ='h6' >
                    <b>POKEMONAPP</b>
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Sign Up</Button>
                    <Button color='inherit'>Login</Button>
                    <Button color='inherit'>About</Button>
                </Stack>
            </Toolbar>
    </AppBar>
  )
}

