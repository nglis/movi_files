import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { CircularProgress } from '@material-ui/core';

import AppBar from './AppBar';
import HeroDisplay from '../Components/HeroDisplay';
import HorizontalScrollContainer from '../SubContainers/HorizontalScrollContainer';

import { getDataByGenre, getEntryFromCatalogByIndex } from '../Other/MovieDataHandler';

function HomePage() {
    const [catalog, setCatalogData] = useState(null);
    const [heroCatalogData, setHeroCatalogData] = useState(null);

    useEffect(() => {
      async function getData() {
         await axios.get('http://api.tvmaze.com/shows').then((res) => {

          if (res.statusText !== 'OK') return;
            const catalogItemIndex = Math.floor(Math.random() * res.data.length);
            const newHeroCatalogData = getEntryFromCatalogByIndex(res.data, catalogItemIndex);
            setHeroCatalogData(newHeroCatalogData);
            setCatalogData(res.data);
        });
      }
      
      getData();
    }, []);

    return(
        <div className="App">
          {!catalog ? <CircularProgress /> :
          <>
              <AppBar />
              <HeroDisplay 
                details={heroCatalogData}
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