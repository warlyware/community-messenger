import axios from 'axios';
import API from '../api';

import * as actions from '../constants/actions';

export const login = data => {
  const token = window.btoa(window.unescape(window.encodeURIComponent(`${data.name}:${data.password}`)));
  const request = axios.get(API.find.me, {
    headers: {
      Authorization: `Basic ${token}`
    }
  });

  return {
    type: actions.USER_LOGGING_IN,
    payload: request,
    meta: token
  }
}

export function logout() {
  return {
    type: actions.USER_LOGGING_OUT
  }
}
