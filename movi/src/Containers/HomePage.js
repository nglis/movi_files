import React, { useState, useEffect } from 'react';

import _ from 'lodash';
import axios from 'axios';

import { CircularProgress } from '@material-ui/core';

import AppBar from './AppBar';
import HeroDisplay from '../Components/HeroDisplay';
import HorizontalScrollContainer from '../SubContainers/HorizontalScrollContainer';

import { getDataByGenre, getEntryFromCatalogByIndex } from '../Other/MovieDataHandler';

function HomePage() {
    const [catalog, setCatalogData] = useState({});
    const [heroCatalogData, setHeroCatalogData] = useState();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      async function getData() {
         await axios.get('http://api.tvmaze.com/shows').then((res) => {
          if (res.statusText !== 'OK') return;
          setCatalogData(res.data);
        });
      }
      
      getData();
      setLoading(true);
    }, []);

    useEffect(() => {
      const catalogItemIndex = Math.floor(Math.random() * catalog.length);
      const newHeroCatalogData = getEntryFromCatalogByIndex(catalog, catalogItemIndex);

      setHeroCatalogData(newHeroCatalogData);
      setLoading(false);
    }, [catalog]);

    return(
        <div className="App">
          {loading ? <CircularProgress /> :
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