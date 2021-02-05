import React from 'react';

import { useStyles } from '../Styles/Components/PopupInfoDialog';

import { generateEntry } from '../Other/MovieDataHandler';

function PopupInfoDialog (props) {
    const classes = useStyles();

    const { dialogData, setShowPopupInfoDialog } = props;
    const data = generateEntry(dialogData);

    console.log(data)

    return (
        <>
            <div 
                className={classes.background}
                onClick={() => setShowPopupInfoDialog(false)}
            />
            <div className={classes.container}>
                <div className={classes.title}>
                    {data.title}
                </div>
                <div className={classes.description}>
                    {data.description}
                </div>
            </div>
        </>
    );
}

export default PopupInfoDialog;