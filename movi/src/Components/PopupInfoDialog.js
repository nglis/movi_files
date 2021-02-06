import React from 'react';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
                            <b>Genres:</b> {data.genres.join(' - ')}
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
                <img 
                    className={classes.img}
                    key={data.title} 
                    src={data.img} 
                    alt={data.title}
                />
            </div>
        </>
    );
}

export default PopupInfoDialog;