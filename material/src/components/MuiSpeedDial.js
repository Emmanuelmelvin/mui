import { CopyAll, Edit, Print, Share } from '@mui/icons-material'
import { SpeedDial, SpeedDialAction , SpeedDialIcon } from '@mui/material'

export const MuiSpeedDial = () => {
  return (
    <SpeedDial 
        sx={{
            position: "absolute",
            bottom: 16,
            right: 16
        }}
        icon={<SpeedDialIcon openIcon={<Edit/>}/>}
        ariaLabel='Navigation speed dial'
        >
        <SpeedDialAction icon={<Print/>} tooltipTitle='Print' tooltipOpen/>
        <SpeedDialAction icon={<CopyAll/>} tooltipTitle='Copy'/>
        <SpeedDialAction icon={<Share/>} tooltipTitle='Share'/>
    </SpeedDial>
  )
}

