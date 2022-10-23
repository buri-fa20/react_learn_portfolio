import React from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';

const Navbar: React.FC = () => {
    return (
        <>
      <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center'}}
      >
        <Toolbar>
          <Button>
            ABOUT
          </Button>
          <Button color='inherit'>
            SKILLS
          </Button>
          <Button color='inherit'>
            Works
          </Button>
          <Button color='inherit'>
            CONTACT
          </Button>
        </Toolbar>
      </AppBar>
    </>
    );
}

export default Navbar;
