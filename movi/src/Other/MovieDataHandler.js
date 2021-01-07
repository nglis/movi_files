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