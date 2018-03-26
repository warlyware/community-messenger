import * as actions from '../constants/actions';

export default function notificationsReducer(state = [], action) {
  switch(action.type) {
    case (actions.GETTING_NOTIFICATIONS):
      return action.payload;
    default:
      return state;
  }
}
