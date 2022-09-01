export const SAVE_EMAIL = 'SAVE_EMAIL';
export const saveEmail = (email) => ({
  type: 'SAVE_EMAIL', email });

// export const REQUEST_API = 'REQUEST_API';
// export const requestApi = () => ({
//   type: 'REQUEST_API',
// });

export const GET_CURRENCIES = 'GET_CURRENCIES';
export const getCurrencies = (payload) => ({
  type: 'GET_CURRENCIES', payload,
});
