import React from 'react'
import { AppBar,Toolbar,Typography } from '@material-ui/core';
import AllInclusiveRoundedIcon from '@material-ui/icons/AllInclusiveRounded';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    typographyStyle: {
        flex: "1"
    }

}))

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyle}>
              JD Marvels APP
                </Typography>
                <AllInclusiveRoundedIcon />
            </Toolbar>
        </AppBar>
    )
      
}

export default Header
