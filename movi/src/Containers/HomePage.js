import _ from 'lodash';

import AppBar from './AppBar';
import HeroDisplay from '../Components/HeroDisplay';
import HorizontalScrollContainer from '../SubContainers/HorizontalScrollContainer';

import { getDataByGenre, getYearFromDate, removeTags } from '../Other/MovieDataHandler';

function HomePage(props) {
    const { data } = props;

    const firstEntry = !_.isNil(data) && !_.isEmpty(data) ? data[0] : {};

    const title = _.get(firstEntry, 'name', 'Unknown Title');
    const date = _.get(firstEntry, 'premiered', '');
    const rating = _.get(firstEntry, 'rating.average', '');
    const length = _.get(firstEntry, 'runtime', '');
    const description = _.get(firstEntry, 'summary', '');

    const heroData = { 
      title,
      rating,
      length,
      episode: '',
      year: getYearFromDate(date),
      description: removeTags(description)
    };

    return(
        <div className="App">
          <AppBar />
          <HeroDisplay 
            details={heroData}
          />
          <HorizontalScrollContainer 
            collectionTitle="Drama"
            content={getDataByGenre(data, "Drama")}
          />
          <HorizontalScrollContainer 
            collectionTitle="Comedy"
            content={getDataByGenre(data, "Comedy")}
          />
          <HorizontalScrollContainer 
            collectionTitle="Thriller"
            content={getDataByGenre(data, "Thriller")}
          />
      </div>
    );
}

export default HomePage;