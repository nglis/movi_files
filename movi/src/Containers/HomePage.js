import React, { useState, useEffect } from 'react';

import _ from 'lodash';
import axios from 'axios';

import { CircularProgress } from '@material-ui/core';

import AppBar from './AppBar';
import HeroDisplay from '../Components/HeroDisplay';
import HorizontalScrollContainer from '../SubContainers/HorizontalScrollContainer';

import { getDataByGenre, getEntryFromCatalogByIndex, generatePreviewData } from '../Other/MovieDataHandler';

function HomePage(props) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    // TODO
    const videoData = _.get(data, 'preview', {});
    const heroPreviewData = generatePreviewData(videoData);

    const catalog = _.get(data, 'catalog', []);
    const catalogItemIndex = Math.floor(Math.random() * catalog.length);
    const heroCatalogData = getEntryFromCatalogByIndex(catalog, catalogItemIndex);

    useEffect(() => {
      async function getData() {
        let c = [];
        let v = {};
        setLoading(true);
         await axios.get('http://api.tvmaze.com/shows').then((res) => {
          if (res.statusText !== 'OK') return;
          c = res.data;
          //setData(data => ({...data, catalog: res.data}));
        });
  
        await axios.get('https://www.googleapis.com/youtube/v3/search', 
          {
            params: {
                q: 'Under the Dome',
                part: 'snippet',
                type: "video",
                maxResults: 1,
                key: process.env.REACT_APP_YOUTUBE_API_KEY
            }
          }).then((res) => {
          if (res.status !== 200) return;
          v = res.data;
          //setData(data => ({...data, preview: res.data}))
        }); 
        setData( { catalog: c, preview: v } );
        setLoading(false);
      }
  
      getData();
    }, []);
    
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