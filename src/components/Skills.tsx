import React from 'react'
import Box from "@mui/system/Box"
import Card from "@mui/material/Card"
import { CardContent } from '@mui/material'
import Typography from '@mui/material/Typography'
import { width } from '@mui/system'

const Skills = () =>{
    return(
        <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            Skills
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
            <Card sx={{ maxWidth: 700, width:500}} style={{backgroundColor: "whitesmoke"}}>
            <CardContent>
              <Typography variant="h5">
                言語
              </Typography>
              <Typography color="textSecondary">
                Swift / Python / C
              </Typography>
            </CardContent>
            </Card>
            </Box>
        <Box display='flex' justifyContent='center' p={1}>
            <Card sx={{ maxWidth: 700, width:500}} style={{backgroundColor: "whitesmoke"}}>
            <CardContent>
              <Typography variant="h5">
                Other
              </Typography>
              <Typography color="textSecondary">
                車の運転・料理・ボウリング・カメラ・サッカー
              </Typography>
            </CardContent>
            </Card>
            </Box>
        </Box>
    );
}
export default Skills;