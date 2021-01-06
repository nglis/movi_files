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