import { GET_CURRENCIES, REQUEST_API, SAVE_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0,
  isLoading: false,
  total: 0,
  expenseId: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
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
