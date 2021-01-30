import React from 'react';

import { useStyles } from '../Styles/Containers/PopupInfoDialog.js';

function PopupInfoDialog (props) {
    const classes = useStyles();

    const { setShowPopupInfoDialog } = props;

    return (
        <div className={classes.root}>
            EMPTY
        </div>
    );
}

export default PopupInfoDialog;