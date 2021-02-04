import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { CircularProgress } from '@material-ui/core';

import AppBar from './AppBar';
import HeroDisplay from '../Components/HeroDisplay';
import PopupInfoDialog from '../Components/PopupInfoDialog';
import HorizontalScrollContainer from '../SubContainers/HorizontalScrollContainer';

import { getDataByGenre } from '../Other/MovieDataHandler';

function HomePage() {
    const [catalog, setCatalogData] = useState(null);

    const [selection, setSelection] = useState(null);
    const [showPopupInfoDialog, setShowPopupInfoDialog] = useState(false);

    useEffect(() => {
      async function getData() {
         await axios.get('http://api.tvmaze.com/shows').then((res) => {

          if (res.statusText !== 'OK') return;
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
                data={catalog}
              />
              <HorizontalScrollContainer 
                collectionTitle="Drama"
                setSelection={setSelection}
                showDetails={setShowPopupInfoDialog}
                content={getDataByGenre(catalog, "Drama", 20)}
              />
              <HorizontalScrollContainer 
                collectionTitle="Comedy"
                setSelection={setSelection}
                showDetails={setShowPopupInfoDialog}
                content={getDataByGenre(catalog, "Comedy", 20)}
              />
              <HorizontalScrollContainer 
                collectionTitle="Thriller"
                setSelection={setSelection}
                showDetails={setShowPopupInfoDialog}
                content={getDataByGenre(catalog, "Thriller", 20)}
              />
            </>
          }
          {showPopupInfoDialog && /*selection &&*/
            <PopupInfoDialog 
              dialogData={selection}
              setShowPopupInfoDialog={setShowPopupInfoDialog}
            />
          }
      </div>
    );
}

export default HomePage;