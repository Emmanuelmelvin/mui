import { Menu } from "@mui/icons-material"
import { Drawer , Box , Typography, IconButton } from "@mui/material"
import { useState } from "react"

export const MuiDrawer = () => {

    const [isDrawerOpen , setIsDrawerOpen] = useState(false)

  return (
    <>
     <Drawer 
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        anchor='left'>
        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>
                Side Panel
            </Typography>
        </Box>
     </Drawer>
     <IconButton size='large' egde='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
        <Menu/>
     </IconButton>
    </>
  )
}

