import React from 'react';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


function Navbar() {
    
    const classes = useStyles();

    return (
    <AppBar position="static">
        <Toolbar>
      
            <Typography variant="h6"className={classes.title} >
                TODO APP
            </Typography>
            <Button color="inherit">About Me</Button>
            <Button color="inherit">Contact Me</Button>

        </Toolbar>
  </AppBar>
    )




}

export default Navbar;