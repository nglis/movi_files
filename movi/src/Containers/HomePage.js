import _ from 'lodash';

import AppBar from './AppBar';
import HeroDisplay from '../Components/HeroDisplay';
import HorizontalScrollContainer from '../SubContainers/HorizontalScrollContainer';

import { getDataByGenre, getYearFromDate, removeTags } from '../Other/MovieDataHandler';

function HomePage(props) {
    const { data } = props;

    const catalog = _.get(data, 'catalog');
    const firstEntry = !_.isNil(catalog) && !_.isEmpty(catalog) ? catalog[0] : {};

    const title = _.get(firstEntry, 'name', 'Unknown Title');
    const date = _.get(firstEntry, 'premiered', '');
    const rating = _.get(firstEntry, 'rating.average', '');
    const length = _.get(firstEntry, 'runtime', '');
    const description = _.get(firstEntry, 'summary', '');

    const heroCatalogData = { 
      title,
      rating,
      length,
      episode: '',
      year: getYearFromDate(date),
      description: removeTags(description)
    };

    const video = _.get(data, 'preview');
    const heroPreviewData = {};

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