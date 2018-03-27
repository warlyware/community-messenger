import { combineReducers } from 'redux';

import userReducer from './user';
import notificationsReducer from './notifications';
import messagesReducer from './messages';

const reducers = combineReducers({
  user: userReducer,
  notifications: notificationsReducer,
  messages: messagesReducer
});

export default reducers;
