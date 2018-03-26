import * as actions from '../constants/actions'

const initialState = {
  data: null,
  isLoading: false
}

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.USER_LOGGING_IN:
      console.log('logging in');
      return { ...initialState, isLoading: true }
    case actions.USER_LOGGED_IN:
      console.log('logged in');
      return { data: payload, isLoading: false }
    case actions.USER_LOGGED_OUT:
      return initialState
    default:
      return state
  }
}
