import React from 'react';

import { useStyles } from '../Styles/Components/PopupInfoDialog';

function PopupInfoDialog (props) {
    const classes = useStyles();

    const { data, setShowPopupInfoDialog } = props;

    return (
        <div className={classes.root}>
            EMPTY
        </div>
    );
}

export default PopupInfoDialog;