import {Typography} from  "@mui/material"
//body1 is the default variant of the typograohy
// you can change the symantic element using the component props
//gutterBottom gives the text a margin at the bottom
export const MuiTypography = () => {
  return (
    <div>
      <Typography variant ='h1'component='div' >H1 Heading</Typography>
      <Typography variant ='h2'>H2 Heading</Typography>
      <Typography variant ='h3'>H3 Heading</Typography>
      <Typography variant ='h4'>H4 Heading</Typography>
      <Typography variant ='h5'>H5 Heading</Typography>
      <Typography variant ='h6'>H6 Heading</Typography>
      <Typography variant ='subtitle1'>Subtitle1 Heading</Typography>
      <Typography variant ='subtitle2'>Subtitle2 Heading</Typography>
      <Typography variant ='body1'> Voluptate laborum ad occaecat proident amet enim ut exercitation consectetur exercitation qui ad id mollit. Proident exercitation dolor laboris fugiat labore ad minim voluptate deserunt consectetur adipisicing reprehenderit do mollit. Adipisicing esse irure labore ipsum et nostrud duis ullamco veniam nulla laborum deserunt. Cillum dolor cupidatat duis elit culpa ad proident sit mollit. </Typography>
      <Typography variant ='body2'>Cupidatat adipisicing id occaecat ea quis labore magna dolor aute. Heading</Typography>
    </div>
  )
}

