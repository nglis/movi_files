import _ from "lodash";

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

export const getDataByGenre = (data, genre) => {
    const items = [];
    if (!data || _.isEmpty(data)) return items;

    for (let item of data) {
        const availableGenres = _.get(item, 'genres', []);
        if (availableGenres.includes(genre)) {
            items.push(item);
        }
    }

    return items;
}

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

export const getEntryFromCatalogByIndex = (catalog, idx) => {
    let entry;
    if (!_.isNil(catalog) && !_.isEmpty(catalog) && idx < catalog.length) {
        entry = catalog[idx];
    }

    const title = _.get(entry, 'name', 'Unknown Title');
    const date = _.get(entry, 'premiered', '');
    const rating = _.get(entry, 'rating.average', '');
    const length = _.get(entry, 'runtime', '');

    let description = _.get(entry, 'summary', '');
    description = trimStrToChars(description, 500);

    return { 
      title,
      rating,
      length,
      episode: '',
      year: getYearFromDate(date),
      description: removeTags(description)
    };
} 

export const convertDataForScrollContainer = (data, limit) => {
    const items = [];
    if (!data || _.isEmpty(data)) return items;
    for (let item of data) {
        if (items.length === limit) break;
        const img = _.get(item, 'image.medium', null);
        const title = _.get(item, 'name', '');

        if (!img || !title) continue;

        items.push(
            {
                img,
                title
            }
        );
    }

    return items;
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

export const trimStrToChars = (str, chars) => {
    if (!str || str.length < chars) return str;

    return str.substring(0, chars) + '...';
}