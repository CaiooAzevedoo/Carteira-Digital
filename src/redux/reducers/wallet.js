import { GET_CURRENCIES, SAVE_EXPENSES } from '../actions/index';

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
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.payload)
        .filter((currency) => currency !== 'USDT'),
      currenciesInfo: Object.values(action.payload),
      exchangeRates: action.payload,
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
  default:
    return state;
  }
}

export default wallet;
