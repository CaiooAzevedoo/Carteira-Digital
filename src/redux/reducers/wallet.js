import { GET_CURRENCIES, SAVE_EXPENSES, DELETE_EXPENSE, EDIT_EXPENSES, UPDATE_EXPENSES }
  from '../actions/index';

const INITIAL_STATE = {
  email: '',
  currencies: [],
  expenses: [],
  isLoading: false,
  total: 0,
  expenseId: 0,
  exchangeRates: {},
  editor: false,
  infoExpenses: {
    id: '',
    value: '',
    description: '',
    currency: '',
    method: '',
    tag: '',
    exchangeRates: {},
  },
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
  case EDIT_EXPENSES:
    return {
      ...state,
      editor: !state.editor,
      infoExpenses: action.expense,
      expenses: state.expenses.filter((ex) => ex !== action.expense),
      total: state.total - action.expense.value * action.ask,

    };
  case UPDATE_EXPENSES:
    return {
      ...state,
      editor: false,
    };
  default:
    return state;
  }
}

export default wallet;
