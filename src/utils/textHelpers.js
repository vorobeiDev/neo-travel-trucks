const getPlural = (text, count) => (count > 1 ? `${text}s` : text);

export const getPluralText = (text, count) => `${count} ${getPlural(text, count)}`;

export const convertToTitleCase = (str) =>  str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());