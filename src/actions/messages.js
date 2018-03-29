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
    type: actions.GET_MESSAGES,
    payload: request
  }
}

export const deleteMessage = (messageId, messageType) => {
  debugger;
  const token = localStorage.getItem('token');
  const request = axios.delete(`${API[messageType].delete}/${messageId}`, {
    headers: {
      Authorization: `Basic ${token}`
    },
  });

  return {
    type: actions.DELETE_MESSAGE,
    payload: request
  }
}
