import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import axios from 'axios';

import { useStyles } from '../Styles/Containers/HeroDisplay.js';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function HeroDisplay(props) {
    const { details } = props;

    const classes = useStyles();

    const [videoData, setVideoData] = useState(null);
    const [loadingPreview, setLoadingPreview] = useState(true);

    useEffect(() => {
        async function getData() {
            if (_.isNil(details) || _.isNil(details.title)) return;

            await axios.get('https://www.googleapis.com/youtube/v3/search', 
            {
                params: {
                    q: details.title,
                    part: 'snippet',
                    type: "video",
                    maxResults: 1,
                    key: process.env.REACT_APP_YOUTUBE_API_KEY
                }
            }).then((res) => {
                if (res.status !== 200) {
                    setVideoData(res.data);
                }
                setLoadingPreview(false);
            }); 
        }
        getData();
    }, []);

    return (
        <div className={classes.root}>
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
            <div className={classes.previewContainer}>
                {videoData && <iframe
                    className={classes.previewVideo}
                    src={videoData.link}
                />}
            </div>
        </div>
    );
}

export default HeroDisplay;