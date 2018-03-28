import * as actions from '../constants/actions'

const initialState = {
  data: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
}

export default function userReducer(state = initialState, { type, payload, meta }) {
  switch (type) {
    case `${actions.USER_LOGGING_IN}_PENDING`:
      return { ...initialState }
    case `${actions.USER_LOGGING_IN}_FULFILLED`:
      localStorage.setItem('token', meta);
      localStorage.setItem('user', JSON.stringify(payload.data));
      return { data: payload.data, token: meta }
    case `${actions.USER_LOGGING_IN}_REJECTED`:
    case actions.USER_LOGGING_OUT:
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return initialState
    default:
      return state
  }
}
