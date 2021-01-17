import _ from 'lodash';

import AppBar from './AppBar';
import HeroDisplay from '../Components/HeroDisplay';
import HorizontalScrollContainer from '../SubContainers/HorizontalScrollContainer';

import { getDataByGenre, getEntryFromCatalogByIndex, generatePreviewData } from '../Other/MovieDataHandler';

function HomePage(props) {
    const { data } = props;

    // TODO
    const videoData = _.get(data, 'preview');
    const heroPreviewData = generatePreviewData(videoData);

    const catalog = _.get(data, 'catalog');
    const heroCatalogData = getEntryFromCatalogByIndex(catalog, 0);

    return(
        <div className="App">
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
      </div>
    );
}

export default HomePage;