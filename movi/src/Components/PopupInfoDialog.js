import React from 'react';

import { useStyles } from '../Styles/Components/PopupInfoDialog';

function PopupInfoDialog (props) {
    const classes = useStyles();

    const { data, setShowPopupInfoDialog } = props;

    return (
        <>
            <div className={classes.background}/>
            <div className={classes.container}>
                Test
            </div>
        </>
    );
}

export default PopupInfoDialog;