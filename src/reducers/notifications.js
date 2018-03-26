import * as actions from '../constants/actions';

export default function notificationsReducer(state = [], action) {
  switch(action.type) {
    case actions.GETTING_NOTIFICATIONS:
      return state;
    case actions.NOTIFICATIONS_RECEIVED:
      // debugger;
      return action.payload
    default:
      return state;
  }
}
