export const SAVE_EMAIL = 'SAVE_EMAIL';
export const saveEmail = (email) => ({
  type: 'SAVE_EMAIL', email });

export const REQUEST_API = 'REQUEST_API';
export const requestAPI = () => ({
  type: 'REQUEST_API',
});

export const GET_CURRENCIES = 'GET_CURRENCIES';
export const getCurrencies = (payload) => ({
  type: 'GET_CURRENCIES',
  payload,
});

export function fetchAPI() {
  return async (dispatch) => {
    dispatch(requestAPI());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    // const responseFilter = response.filter((res) => res !== 'USDT');
    const data = await response.json();
    dispatch(getCurrencies(data));
  };
}

export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const saveExpenses = (expense) => ({
  type: 'SAVE_EXPENSES',
  expense,
});
