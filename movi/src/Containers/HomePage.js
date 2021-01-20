import React, { useState, useEffect } from 'react';

import _ from 'lodash';
import axios from 'axios';

import { CircularProgress } from '@material-ui/core';

import AppBar from './AppBar';
import HeroDisplay from '../Components/HeroDisplay';
import HorizontalScrollContainer from '../SubContainers/HorizontalScrollContainer';

import { getDataByGenre, getEntryFromCatalogByIndex, generatePreviewData } from '../Other/MovieDataHandler';

function HomePage() {
    const [catalog, setCatalogData] = useState({});
    const [videoData, setVideoData] = useState({});

    const [heroCatalogData, setHeroCatalogData] = useState();

    const [loading, setLoading] = useState(false);

    // TODO
    const heroPreviewData = generatePreviewData(videoData);

    console.log(heroCatalogData)

    useEffect(() => {
      async function getData() {
        let c = [];
        setLoading(true);
         await axios.get('http://api.tvmaze.com/shows').then((res) => {
          if (res.statusText !== 'OK') return;
          c = res.data;
        });
        setCatalogData(c);
      }
  
      getData();
    }, []);

    useEffect(() => {
      const catalogItemIndex = Math.floor(Math.random() * catalog.length);
      const newHeroCatalogData = getEntryFromCatalogByIndex(catalog, catalogItemIndex);
      setHeroCatalogData(newHeroCatalogData);
      setLoading(false);

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
    }, [catalog])
    
    return(
        <div className="App">
          {loading ? <CircularProgress /> :
          <>
              <AppBar />
              <HeroDisplay 
                details={heroCatalogData}
                preview={heroPreviewData}
              />
              <HorizontalScrollContainer 
                collectionTitle="Drama"
                content={getDataByGenre(catalog, "Drama")}
              />
              <HorizontalScrollContainer 
                collectionTitle="Comedy"
                content={getDataByGenre(catalog, "Comedy")}
              />
              <HorizontalScrollContainer 
                collectionTitle="Thriller"
                content={getDataByGenre(catalog, "Thriller")}
              />
            </>
          }
      </div>
    );
}

export default HomePage;