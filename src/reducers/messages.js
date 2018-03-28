import * as actions from '../constants/actions';

export default function messagesReducer(state = [], action) {
  switch(action.type) {
    case `${actions.GETTING_MESSAGES}_PENDING`:
      return state;
    case `${actions.GETTING_MESSAGES}_FULFILLED`:
      return action.payload.data.data;
    case `${actions.GETTING_MESSAGES}_REJECTED`:
    default:
      return state;
  }
}
