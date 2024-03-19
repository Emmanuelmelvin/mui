import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider } from '@mui/material'
import {Mail} from '@mui/icons-material'
import React from 'react'

export const MuiList = () => {
  return (
    <Box sx={{width: '400px' , backgroundColor: '#efefef'}}>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                    <Mail/>
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List item 1' secondary='Secondary Text'/>
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem>
                 <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                    <Mail/>
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List item 2' secondary='Secondary Text'/>
            </ListItem>
            <Divider/>
            <ListItem>
                  <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                    <Mail/>
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List item 3' secondary='Secondary Text'/>
            </ListItem>
        </List>
    </Box>
  )
}
