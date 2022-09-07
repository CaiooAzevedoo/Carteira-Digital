import { GET_CURRENCIES, SAVE_EXPENSES, DELETE_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  currencies: [],
  expenses: [],
  idToEdit: 0,
  isLoading: false,
  total: 0,
  expenseId: 0,
  exchangeRates: {},
};

function wallet(state = INITIAL_STATE, action) {
  const { payload } = action;
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(payload)
        .filter((currency) => currency !== 'USDT'),
      currenciesInfo: Object.values(payload),
      exchangeRates: payload,
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
      expenseId: state.expenseId + 1,
      total: state.total + Number(action.expense.value)
      * Number(state.currenciesInfo.find((curr) => curr.code === action.expense.currency)
        .ask),
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      total: state.total - action.expense.value * action.ask,
      expenses: state.expenses
        .filter((e) => e !== action.expense),
      expenseId: state.expenseId - 1,
    };
  default:
    return state;
  }
}

export default wallet;
