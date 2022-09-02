import { GET_CURRENCIES, REQUEST_API } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
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
      currencies: [...action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
