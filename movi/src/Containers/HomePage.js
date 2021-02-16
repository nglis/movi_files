import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { useStyles } from '../Styles/Containers/HomePage.js';
import { CircularProgress } from '@material-ui/core';

import AppBar from './AppBar';
import Footer from './Footer';
import HeroDisplay from '../Components/HeroDisplay';
import PopupInfoDialog from '../Components/PopupInfoDialog';
import HorizontalScrollContainer from '../SubContainers/HorizontalScrollContainer';

import { getDataByGenre } from '../Other/MovieDataHandler';

const categories = ["Drama", "Comedy", "Thriller"];

// TODO: Separate pages out into one primary container

function HomePage() {
    const classes = useStyles();

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
          {!catalog ? 
            <div className={classes.fullPageSpinnerContainer}>
              <CircularProgress 
                size="4em"
                thickness="5"
                style={{ color: 'grey' }}
              />
            </div> :
          <>
              <AppBar />
              <HeroDisplay 
                data={catalog}
              />
              {categories.map(category => (
                <HorizontalScrollContainer 
                  collectionTitle={category}
                  setSelection={setSelection}
                  showDetails={setShowPopupInfoDialog}
                  content={getDataByGenre(catalog, category, 20)}
                />
              ))}
              <Footer />
          </>
          }
          {showPopupInfoDialog && selection &&
            <PopupInfoDialog 
              dialogData={selection}
              setShowPopupInfoDialog={setShowPopupInfoDialog}
            />
          }
      </div>
    );
}

export default HomePage;