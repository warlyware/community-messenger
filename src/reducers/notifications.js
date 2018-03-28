import * as actions from '../constants/actions';

export default function notificationsReducer(state = [], action) {
  switch(action.type) {
    case `${actions.GETTING_NOTIFICATIONS}_PENDING`:
      return state;
    case `${actions.GETTING_NOTIFICATIONS}_FULFILLED`:
      debugger;
      return action.payload.data.data;
    case `${actions.GETTING_NOTIFICATIONS}_REJECTED`:
    default:
      return state;
  }
}
