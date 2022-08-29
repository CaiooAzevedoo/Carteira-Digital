// Coloque aqui suas actions
export const saveEmail = (email) => ({ type: 'SAVE_EMAIL', email });
export const requestAPI = (payload) => ({ type: 'REQUEST_API', payload });
export const getError = (err) => ({ type: 'GET_ERROR', err });
