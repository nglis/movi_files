import _ from "lodash";

export const dataPath = (data) => {
    //return _.get(data, 'show');
    return data;
}

export const getDataByGenre = (data, genre, size = -1) => {
    const items = [];
    if (!data || _.isEmpty(data)) return items;

    let count = 0;

    for (let rawEntry of data) {
        const entry = generateEntry(rawEntry, 500);
        if (size !== -1 && count >= size) break;
        const availableGenres = _.get(entry, 'genres', []);
        if (availableGenres.includes(genre)) {
            items.push(entry);
            count++;
        }
    }

    return items;
}

// Creates a link and other data related to preview 
export const generatePreviewData = previewData => {
    if (_.isNil(previewData) || _.isNil(previewData.items) || previewData.items.length === 0) {
        return null;
    }

    const videoId = _.get(previewData.items[0], 'id.videoId', null);
    if (videoId === null) return null;

    const youtubePrefix = 'https://www.youtube.com/embed/';
    const parameters = '?controls=0';

    return { link: youtubePrefix + videoId + parameters };
}

export const getHeroData = data => {
    const catalogItemIndex = Math.floor(Math.random() * data.length);
    const newHeroCatalogData = getEntryFromCatalogByIndex(data, catalogItemIndex);
    
    return newHeroCatalogData;
}

// Generates data from catalog entry at idx
export const getEntryFromCatalogByIndex = (catalog, idx, descriptionMaxLength = 500) => {
    let entry;
    if (!_.isNil(catalog) && !_.isEmpty(catalog) && idx < catalog.length) {
        entry = catalog[idx];
    }

    return generateEntry(entry, descriptionMaxLength);
} 

// Generates data for given catalog entry 
export const generateEntry = (entry, descriptionMaxLength) => {
    const pathToData = dataPath(entry);

    const title = _.get(pathToData, 'name', 'Unknown Title');
    const genres = _.get(pathToData, 'genres', []);
    const externals = _.get(pathToData, 'externals', {});
    const img = _.get(pathToData, 'image.medium', null);
    const heroImg = _.get(pathToData, 'image.original', null);
    const date = _.get(pathToData, 'premiered', '');
    const rating = _.get(pathToData, 'rating.average', '');
    const length = _.get(pathToData, 'runtime', '');


    let description = _.get(pathToData, 'summary', '');
    description = trimStrToChars(description, descriptionMaxLength);

    return { 
      title,
      genres,
      externals,
      img,
      heroImg,
      rating,
      length,
      episode: '',
      year: getYearFromDate(date),
      description: removeTags(description)
    };
} 

export const generateYoutubeParams = (q, part, type, maxResults, key) => {
    return {
        q,
        part,
        type,
        maxResults,
        key
    };
}

/* String handling */

// Time str to length (chars)
export const trimStrToChars = (str, chars) => {
    if (!str || str.length < chars) return str;

    return str.substring(0, chars) + '...';
}

// Date is stored in YYYY-MM-DD format
export const getYearFromDate = date => {
    if (!date || date === '') return '';
    
    const splitDate = date.split("-");
    if (!splitDate[0]) return;

    return splitDate[0];
}

// Remove HTML tags from a string
export const removeTags = str => {
    if (!str || str === '') return '';
    return str.replace(/(<([^>]+)>)/gi, "");
}