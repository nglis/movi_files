import React from 'react';
import _ from 'lodash';

import imdbLogo from '../static/imdb.jpg';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { useStyles } from '../Styles/Components/PopupInfoDialog';
import { generateEntry } from '../Other/MovieDataHandler';

function PopupInfoDialog (props) {
    const classes = useStyles();

    const { dialogData, setShowPopupInfoDialog } = props;
    const data = generateEntry(dialogData, 300);

    return (
        <div className={classes.dialogContainer}>
            <div 
                className={classes.background}
                onClick={() => setShowPopupInfoDialog(false)}
            />
            <div className={classes.container}>
                <div className={classes.infoContainer}>
                    <div className={classes.title}>
                        {data.title}
                    </div>
                    <div className={classes.other}>
                        {data.year} | {data.rating}/10 | {data.length} min
                    </div>
                    <div className={classes.description}>
                        {data.description}
                    </div>
                    {data.genres != [] && 
                        <div className={classes.additionalInfo}>
                            <b>Genres:</b> {data.genres.join(', ')}
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
                        key={data.title} 
                        src={data.img} 
                        alt={data.title}
                    />
                    {_.get(data, 'externals.imdb') && <div className={classes.imdbContainer}>
                        <a href={`https://www.imdb.com/title/${data.externals.imdb}/`} target="_blank" rel="noopener noreferrer">
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