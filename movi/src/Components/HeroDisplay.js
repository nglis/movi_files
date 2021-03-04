import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import axios from 'axios';

import useCurrentWidth from '../Hooks/useCurrentWidth';
import { useStyles } from '../Styles/Components/HeroDisplay.js';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { generateYoutubeParams, generatePreviewData, getHeroData } from '../Other/MovieDataHandler';

function HeroDisplay(props) {
    const { data } = props;

    const classes = useStyles();
    const width = useCurrentWidth();

    // TODO: Separate herodisplay width based components into new components

    const [details, setDetails] = useState(getHeroData(data));

    const [videoData, setVideoData] = useState(null);
    const [videoDataUnavailable, setVideoDataUnavailable] = useState(false);

    useEffect(() => {
        async function getData() {
            if (_.isNil(details) || _.isNil(details.title)) return;

            await axios.get('https://www.googleapis.com/youtube/v3/search', 
            {
                params: generateYoutubeParams(details.title + ' tv show trailer', 'snippet', 'video', 1, process.env.REACT_APP_YOUTUBE_API_KEY)
            }).then((res) => {
                if (res.status !== 200) {
                    setVideoDataUnavailable(true);
                } else {
                    const processData = generatePreviewData(res.data);
                    setVideoData(processData);
                }
            }); 
        }

        getData();
    }, []);

    return (
        <>
            {width > 750 ? <div className={classes.root}>
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
                    {details.genres !== [] && 
                        <div className={classes.additionalInfo}>
                            <b>Genres:</b> {details.genres.join(', ')}
                        </div>
                    }
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
                <div className={classes.previewContainer}>
                    {videoDataUnavailable && <></>}
                    {videoData && <iframe
                        className={classes.previewVideo}
                        src={videoData.link}
                    />}
                </div>
            </div>
            :
            <div className={classes.heroImageContainer}>
                <img 
                    className={classes.heroImg}
                    key={details.title} 
                    src={details.heroImg} 
                    alt={details.title}
                />
                <div className={classes.heroImgButtons}>
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
            }
        </>
    );
}

export default HeroDisplay;