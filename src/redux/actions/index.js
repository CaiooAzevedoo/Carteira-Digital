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

export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const deleteExpenseBtn = (expense, ask) => ({
  type: DELETE_EXPENSE,
  expense,
  ask,
});

export const EDIT_EXPENSES = 'EDIT_ESPENSES';
export const editExpenses = (expense, ask) => ({
  type: EDIT_EXPENSES,
  expense,
  ask,
});

export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';
export const updateExpenseBtn = () => ({
  type: UPDATE_EXPENSES,
});

export const ORDERING_STATE = 'ORDERING_STATE';
export const orderingState = () => ({
  type: ORDERING_STATE,
});
