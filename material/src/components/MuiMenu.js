import {CatchingPokemon} from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography, Button, Stack, Menu, MenuItem } from '@mui/material'
import {KeyboardArrowDown} from '@mui/icons-material'
import {useState} from 'react'

export const MuiMenu = () => {
 
        const [anchorEl , setAnchorEl] = useState(null)
        const open = Boolean(anchorEl)
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget)
        }
        const handleClose = () => {
            setAnchorEl(null)
        }
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
                    <b>POKEMON</b>
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Sign Up</Button>
                    <Button color='inherit'>Login</Button>
                    <Button color='inherit'>About</Button>
                    <Button 
                    color='inherit'
                    id='resources-button'
                    onClick={handleClick}
                    aria-controls={open ? 'resources-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open? 'true' : 'false'}
                    endIcon={<KeyboardArrowDown/>}
                    >
                        Resources</Button>
                </Stack>
                <Menu 
                  MenuListProps={{
                    'aria-labelledby' : 'resources-button'
                  }}
                  onClose={handleClose}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  id='resources-menu'>
                        <MenuItem  onClick={handleClose}>Blog</MenuItem>
                        <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
    </AppBar>
  )
}

