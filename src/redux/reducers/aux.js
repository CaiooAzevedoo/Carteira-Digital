import { ORDERING_STATE } from '../actions/index';

const INITIAL_STATE = {
  ordering: '',

};
function aux(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ORDERING_STATE:
    return {
      ...state,
      ordering: expenses.sort((a, b) => {
        if (a.id > b.id) {
          return '1';
        }
        if (a.id < b.id) {
          return '-1';
        }
        return '0';
      }),
    };
  default:
    return state;
  }
}

export default aux;
