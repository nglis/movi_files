import React from 'react';

import { useStyles } from '../Styles/Containers/AppBar.js';

function AppBar () {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            MOVI
        </div>
    );
}

export default AppBar;