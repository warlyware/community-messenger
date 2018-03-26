import axios from 'axios';
import CREDS from '../creds';
import API from '../api';

import * as actions from '../constants/actions';

export const login = data => dispatch => {
  dispatch({
    type: actions.USER_LOGGING_IN
  });

  const token = window.btoa(window.unescape(window.encodeURIComponent(CREDS.string)));
  axios.get(API.find.me, {
    headers: {
      Authorization: `Basic ${token}`
    }
  }).then((user) => {
    dispatch({
      type: actions.USER_LOGGED_IN,
      payload: user.data
    });
  })
  .catch((err) => {
    console.error(err);
  });
}

export function logout() {
  return {
    type: actions.USER_LOGGED_OUT
  }
}
