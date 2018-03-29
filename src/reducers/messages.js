import * as actions from '../constants/actions';

export default function messagesReducer(state = [], action) {
  switch(action.type) {
    case `${actions.GET_MESSAGES}_PENDING`:
      return state;
    case `${actions.GET_MESSAGES}_FULFILLED`:
      return action.payload.data.data;
    case `${actions.GET_MESSAGES}_REJECTED`:
      return [];
    case `${actions.DELETE_MESSAGE}_PENDING`:
      return state;
    case `${actions.DELETE_MESSAGE}_FULFILLED`:
      return state.filter((message) => {
        return message.id !== action.meta;
      });
    case `${actions.DELETE_MESSAGE}_REJECTED`:
    default:
      return state;
  }
}
