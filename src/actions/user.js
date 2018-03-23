import axios from 'axios';
import CREDS from '../creds';
import API from '../api';

import * as constants from '../constants'

export const login = data => dispatch => {
  dispatch({
    type: constants.USER_LOGGING_IN
  });
  debugger;
  const token = window.btoa(window.unescape(window.encodeURIComponent(CREDS.string)));
  axios.get(API.find.me, {
    headers: {
      Authorization: `Basic ${token}`
    }
  }).then((user) => {
    dispatch({
      type: constants.USER_LOGGED_IN,
      payload: user.data
    });
  })
  .catch((err) => {
    console.error(err);
  });
}

export function logout() {
  return {
    type: constants.USER_LOGGED_OUT
  }
}
