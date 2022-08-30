const INITIAL_STATE = {
  email: '',
  wallet: {
    currencies: [],
    expenses: [],
    editor: false,
    idToEdit: 0,
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_EMAIL':
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;
