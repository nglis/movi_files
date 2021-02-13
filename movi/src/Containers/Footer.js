import React from 'react';

import { useStyles } from '../Styles/Containers/Footer.js';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Footer () {
    const classes = useStyles();

    return (
        <>
        <div className={classes.footerShare}>
            <div className={classes.footerShareButtons}>
                <InstagramIcon className={classes.shareButton}/>
                <FacebookIcon className={classes.shareButton}/>
                <TwitterIcon className={classes.shareButton}/>
                <WhatsAppIcon className={classes.shareButton}/>
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