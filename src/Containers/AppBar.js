import React from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStyles } from '../Styles/Containers/AppBar.js';

function AppBar () {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                MOVI
            </div>
            <div className={classes.navButtons}>
                <AccountCircleIcon fontSize='inherit'/>
            </div>
        </div>
    );
}

export default AppBar;