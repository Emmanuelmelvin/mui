import { Rating, Stack  } from '@mui/material'
import {Favorite , FavoriteBorder} from '@mui/icons-material'
import {useState} from 'react'
//readOnly props sets it to read only.
//highlightSelectedOnly sets the icon that is selected only.
export const MuiRating = () => {
    const [rating , setRating] = useState(null)
    console.log({rating,})
    const handleChange = (_event , newRating) => {
        setRating(newRating)
    }
  return (
    <Stack spacing={2}>
      <Rating
      precision={.5}
      onChange={handleChange}
      value={rating}
      size='large'
      emptyIcon={<FavoriteBorder fontSize='inherit' color='error'/>}
      icon={<Favorite fontSize='inherit' color='error'/>}
      />
    </Stack>
  )
}
