const getPlural = (text, count) => (count > 1 ? `${text}s` : text);

export const getPluralText = (text, count) => `${count} ${getPlural(text, count)}`;
