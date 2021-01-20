import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import axios from 'axios';

import { useStyles } from '../Styles/Containers/HeroDisplay.js';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function HeroDisplay(props) {
    const { details } = props;

    const classes = useStyles();

    const [videoData, setVideoData] = useState();
    
    useEffect(() => {
        async function getData() {
          let v = {};
          await axios.get('https://www.googleapis.com/youtube/v3/search', 
          {
            params: {
                q: newHeroCatalogData.title,
                part: 'snippet',
                type: "video",
                maxResults: 1,
                key: process.env.REACT_APP_YOUTUBE_API_KEY
            }
          }).then((res) => {
            if (res.status !== 200) return;
            v = res.data;
          }); 
          setVideoData(v);
        }
  
        getData();
    });
      
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
                {!_.isNil(preview, 'link') && <iframe
                    className={classes.previewVideo}
                    src={preview.link}
                />}
            </div>
        </div>
    );
}

export default HeroDisplay;