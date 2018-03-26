import { combineReducers } from 'redux';

import userReducer from './user';
import notificationsReducer from './notifications';

const reducers = combineReducers({
  user: userReducer,
  notifications: notificationsReducer
});

export default reducers;
