import { SAVE_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária

};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;
