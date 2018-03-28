import axios from 'axios';

import API from '../api';
import * as actions from '../constants/actions';

export const getMessages = () => {
  const token = localStorage.getItem('token');
  const request = axios.get(API.broadcasts.createdByMe , {
    headers: {
      Authorization: `Basic ${token}`
    },
    params: {
      page: 1,
      perPage: 20,
    }
  });

  return {
    type: actions.GETTING_MESSAGES,
    payload: request
  }
}
