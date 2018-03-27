import * as actions from '../constants/actions';

export default function messagesReducer(state = [], action) {
  switch(action.type) {
    case actions.GETTING_MESSAGES:
      return state;
    case actions.MESSAGES_RECEIVED:
      return action.payload
    default:
      return state;
  }
}
