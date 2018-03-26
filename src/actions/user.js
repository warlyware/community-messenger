import axios from 'axios';
import API from '../api';

import * as actions from '../constants/actions';

export const login = data => dispatch => {
  dispatch({
    type: actions.USER_LOGGING_IN
  });

  const token = window.btoa(window.unescape(window.encodeURIComponent(`${data.name}:${data.password}`)));
  axios.get(API.find.me, {
    headers: {
      Authorization: `Basic ${token}`
    }
  }).then((user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user.data));
    dispatch({
      type: actions.USER_LOGGED_IN,
      payload: user.data,
      meta: token
    });
  })
  .catch((err) => {
    console.error(err);
  });
}

export function logout() {
  localStorage.removeItem('token');

  return {
    type: actions.USER_LOGGED_OUT
  }
}
