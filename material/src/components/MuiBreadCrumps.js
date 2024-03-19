import { Breadcrumbs , Link , Typography ,Box } from "@mui/material"
import {NavigateNext} from '@mui/icons-material'

export const MuiBreadCrumps = () => {
  return (
    <Box m={2}>
      <Breadcrumbs 
            separator={<NavigateNext fontSize='small'/>}
            maxItems={2}
            itemsAfterCollapse={2}
            itemsBeforeCollapse={2}
            aria-label='breadcrumbs'>
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Resources</Link>
            <Link underline='hover' href='#'>ChiBest</Link>
            <Typography color='text.primary'>MeMine</Typography>
        </Breadcrumbs>
      </Box>
  )
}


