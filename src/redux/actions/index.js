export const SAVE_EMAIL = 'SAVE_EMAIL';
export const saveEmail = (email) => ({
  type: 'SAVE_EMAIL', email });

export const GET_CURRENCIES = 'GET_CURRENCIES';
export const getCurrencies = (payload) => ({
  type: 'GET_CURRENCIES',
  payload,
});

export function fetchAPI() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(getCurrencies(data));
  };
}

export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const saveExpenses = (expense) => ({
  type: 'SAVE_EXPENSES',
  expense,
});
