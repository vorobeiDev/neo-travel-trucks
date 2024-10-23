export const currencyFormat = (num, currency = '€') => {
  return `${currency}${num.toFixed(2)}`
};
