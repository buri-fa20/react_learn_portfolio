import React from 'react';
import { AppBar, Button,Toolbar} from '@mui/material';
import { green, red } from '@mui/material/colors';

const color = green[400];

const Navbar: React.FC = () => {
    return (
        <>
      <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center', backgroundColor: color}}
      >
        <Toolbar>
        <Button 
        style={{ fontWeight:'bold'}}
        color='inherit'
        >
            TOP
          </Button>
        <Button 
        style={{ fontWeight:'bold'}}
        color='inherit'
        >
            ABOUT
          </Button>
          <Button 
        style={{ fontWeight:'bold'}}
        color='inherit'
        >
            SKILLS
          </Button>
          <Button 
        style={{ fontWeight:'bold'}}
        color='inherit'
        >
            Works
          </Button>
          <Button 
        style={{ fontWeight:'bold'}}
        color='inherit'
        >
            CONTACT
          </Button>
        </Toolbar>
      </AppBar>
    </>
    );
}

export default Navbar