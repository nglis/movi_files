import React from 'react';

import { useStyles } from '../Styles/Containers/Footer.js';

function Footer () {
    const classes = useStyles();

    return (
        <>
        <div className={classes.footerShare}>
            <div classname={classes.footerShareButtons}>
                Share buttons will go here
            </div>
            <div className={classes.footerShareNavigation}>
                Navigation links will go here
            </div>
        </div>
        <div className={classes.footer}>
            <div className={classes.footerShareTextUpper}>
                Explore your favorites
            </div>
            <div className={classes.footerShareTextLower}>
                MOVI
            </div>
        </div>
        </>
    );
}

export default Footer;