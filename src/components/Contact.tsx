import React from 'react'
import Box from "@mui/system/Box"
import Typography from '@mui/material/Typography'
import { Link } from '@mui/material'
import Icon from '@mui/material'
import Avatar from "@mui/material/Avatar"
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { blue, green, grey, purple, red } from '@mui/material/colors'

const Contact = () => {
    return(
        <>
        <Box p={2}>
            <Box display='flex' justifyContent='center'>
                <Typography variant='h5'>
                    Contact
                </Typography>
            </Box>
            <Box display='flex' p={2} justifyContent='center'>
            <Link href='#' color='inherit' sx={{marginLeft:1}}>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </Link>
          <Link href='#' color='inherit' sx={{marginLeft:1}}>
            <Avatar sx={{bgcolor:grey[900]}}>
              <GitHubIcon />
            </Avatar>
          </Link>
          <Link href='#' color='inherit' sx={{marginLeft:1}}>
            <Avatar sx={{bgcolor: blue[500]}}>
              <TwitterIcon />
            </Avatar>
          </Link>
            </Box>

        </Box>
        </>
    );
}
export default Contact;