import * as constants from '../constants'

const initialState = {
  data: null,
  isLoading: false
}

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case constants.USER_LOGGING_IN:
      console.log('logging in');
      return { ...initialState, isLoading: true }
    case constants.USER_LOGGED_IN:
      console.log('logged in');
      return { data: payload, isLoading: false }
    case constants.USER_LOGGED_OUT:
      return initialState
    default:
      return state
  }
}
