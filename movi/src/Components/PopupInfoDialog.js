import React from 'react';
import _ from 'lodash';

import imdbLogo from '../static/imdb.jpg';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { useStyles } from '../Styles/Components/PopupInfoDialog';

function PopupInfoDialog (props) {
    const classes = useStyles();

    const { dialogData, setShowPopupInfoDialog } = props;

    return (
        <div className={classes.dialogContainer}>
            <div 
                className={classes.background}
                onClick={() => setShowPopupInfoDialog(false)}
            />
            <div className={classes.container}>
                <div className={classes.infoContainer}>
                    <div className={classes.title}>
                        {dialogData.title}
                    </div>
                    <div className={classes.other}>
                        {dialogData.year} | {dialogData.rating || '-'}/10 | {dialogData.length} min
                    </div>
                    <div className={classes.description}>
                        {dialogData.description}
                    </div>
                    {dialogData.genres !== [] && 
                        <div className={classes.additionalInfo}>
                            <b>Genres:</b> {dialogData.genres.join(', ')}
                        </div>
                    }
                    <div className={classes.buttons}>
                        <button className={classes.button}>
                            <div className={classes.flexRowCentered}>
                                <PlayArrowIcon /> 
                                <span className={classes.playTextMargins}>
                                    PLAY
                                </span>
                            </div>
                        </button>
                        <button className={classes.disabledButton}>
                            SAVE
                        </button>
                    </div>
                </div>
                <div className={classes.secondaryContainer}>
                    <img 
                        className={classes.img}
                        key={dialogData.title} 
                        src={dialogData.img} 
                        alt={dialogData.title}
                    />
                    {_.get(dialogData, 'externals.imdb') && <div className={classes.imdbContainer}>
                        <a href={`https://www.imdb.com/title/${dialogData.externals.imdb}/`} target="_blank" rel="noopener noreferrer">
                            <img 
                                className={classes.imdb}
                                key="imdb-button" 
                                src={imdbLogo} 
                                alt="View on IMDb"
                            />
                        </a>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default PopupInfoDialog;