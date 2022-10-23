import React from "react";
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import ImageFile from '../static/images/TSD2GN3U2-USRRWDH9T-f1e464fb4f08-192.jpeg'



  const MyAvatar = () =>{
    return(
        <Box p={2}>
            <Box display='flex' justifyContent='center' p={1} >
          <Avatar
            alt='Taro Tanaka'
            src={ImageFile}
            sx={{ width: 270, height: 270 }}
          />
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            HARUKI SEJIMA
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='body1'>
            C-Style inc. CEO
          </Typography>
        </Box>
        </Box>
    );
  }
  export default MyAvatar;