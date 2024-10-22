export const getIsNameEqual = (name, search) => name
  .toLowerCase()
  .includes(search.toLowerCase());

export const getIsPhoneEqual = (phone, search) => phone
  .toLowerCase()
  .split('-')
  .join('')
  .includes(search.toLowerCase());