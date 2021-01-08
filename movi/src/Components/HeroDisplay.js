import { useStyles } from '../Styles/Containers/HeroDisplay.js';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function HeroDisplay(props) {
    const classes = useStyles();

    const { details } = props;

    return (
        <div className={classes.details}>
            <div className={classes.title}>
                {details.title}
            </div>
            <div className={classes.other}>
                {details.year} | {details.rating}/10 | {details.length} min
            </div>
            <div className={classes.episode}>
                {details.episode}
            </div>
            <div className={classes.description}>
                {details.description}
            </div>
            <div className={classes.heroActions}>
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
    );
}

export default HeroDisplay;