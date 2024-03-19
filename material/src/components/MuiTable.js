import { TableContainer , Table , TableHead , TableBody , TableRow ,  TableCell, Paper } from "@mui/material"

//React Table Package has more in store.
export const MuiTable = () => {
  return (
    <TableContainer 
    sx={{maxHeight:'300px'}}
    component={Paper}>
        <Table aria-label='simple table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>FirstName</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {
                        TableContent.map(content => (
                            <TableRow 
                            sx={{'&:last-child , &:last child th': {border: 0}}}
                            key={content.id}>
                            <TableCell>{content.id}</TableCell>
                            <TableCell>{content.first_name}</TableCell>
                            <TableCell>{content.last_name}</TableCell>
                            <TableCell align='center'>{content.email}</TableCell>
                            </TableRow>
                        ))
                    }
            </TableBody>
        </Table>
    </TableContainer>
        
  )
}

const TableContent= [{
    "id": 1,
    "first_name": "Jacinta",
    "last_name": "Egentan",
    "email": "jegentan0@rakuten.co.jp",
    "gender": "Female",
    "ip_address": "94.44.27.88"
  }, {
    "id": 2,
    "first_name": "Erma",
    "last_name": "Tomkowicz",
    "email": "etomkowicz1@smugmug.com",
    "gender": "Polygender",
    "ip_address": "91.43.161.32"
  }, {
    "id": 3,
    "first_name": "Cliff",
    "last_name": "Rawes",
    "email": "crawes2@behance.net",
    "gender": "Male",
    "ip_address": "47.34.103.56"
  }, {
    "id": 4,
    "first_name": "Katey",
    "last_name": "Guilleton",
    "email": "kguilleton3@blog.com",
    "gender": "Female",
    "ip_address": "117.33.248.85"
  }, {
    "id": 5,
    "first_name": "Eugen",
    "last_name": "Lanaway",
    "email": "elanaway4@vimeo.com",
    "gender": "Male",
    "ip_address": "87.28.89.198"
  }, {
    "id": 6,
    "first_name": "Myrah",
    "last_name": "Ebbrell",
    "email": "mebbrell5@liveinternet.ru",
    "gender": "Female",
    "ip_address": "254.226.115.211"
  }, {
    "id": 7,
    "first_name": "Abba",
    "last_name": "Ayliff",
    "email": "aayliff6@godaddy.com",
    "gender": "Male",
    "ip_address": "88.188.251.165"
  }, {
    "id": 8,
    "first_name": "Celia",
    "last_name": "Cregeen",
    "email": "ccregeen7@cocolog-nifty.com",
    "gender": "Female",
    "ip_address": "218.236.12.89"
  }, {
    "id": 9,
    "first_name": "Luther",
    "last_name": "Garnar",
    "email": "lgarnar8@oakley.com",
    "gender": "Male",
    "ip_address": "95.255.11.53"
  }, {
    "id": 10,
    "first_name": "Thomas",
    "last_name": "Kingdom",
    "email": "tkingdom9@time.com",
    "gender": "Male",
    "ip_address": "135.214.8.188"
  }]
