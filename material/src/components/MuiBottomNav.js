import { BottomNavigation , BottomNavigationAction } from "@mui/material"
import { Home, Person , Favorite } from "@mui/icons-material"
import {useState} from 'react'
import HomeSide from "../testFiles/HomeSide"
import FavSide from "../testFiles/FavSide"
import PersonSide from "../testFiles/PersonSide"

export const MuiBottomNav = () => {

    const [value , setValue] = useState(0)
    const handleChange = (_event , newValue) => {
        setValue(newValue)
    }

  return (
    <>
    {value === 0 ? <HomeSide/>: null}
    {value === 1 ? <FavSide/>: null}
    {value === 2 ? <PersonSide/>: null}
    <BottomNavigation 
        value={value}
        onChange={handleChange}
        sx={{
        width: '100%',
        position: 'absolute',
        bottom: 0
        }}
        showLabels
         >
        <BottomNavigationAction label='Home' icon={<Home/>} />
        <BottomNavigationAction label='Favorites' icon={<Favorite/>}/>
        <BottomNavigationAction label='Person' icon={<Person/>}/>
    </BottomNavigation>
    </>
  )
}

