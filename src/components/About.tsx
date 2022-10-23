import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material'

const About = () =>{
    return(
        <>
            <Box p={1}>
                <Box display='flex' justifyContent='center'>
                    <Typography variant='h5'>
                        About
                    </Typography>
                </Box>
            <Box display='flex' justifyContent='center' p={1}>
            <Card sx={{ maxWidth: 700 }}>
                <Typography variant='body1' align='left' p={2}>
                C-Style（株）CEO<br />
                /米子高専/高専を盛り上げる活動をしています！<br />
                ソフトウェア受託開発・DXコンサルティング等お仕事のご連絡はDMまで！<br />
                </Typography>
            </Card>
            </Box>
            </Box>
        </>
    );
}

export default About;