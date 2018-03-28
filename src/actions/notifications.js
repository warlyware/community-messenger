import axios from 'axios';

import API from '../api';
import * as actions from '../constants/actions';

export const getNotifications = () => {
  const token = localStorage.getItem('token');
  const request = axios.get(API.find.relatedToMyProperty, {
    headers: {
      Authorization: `Basic ${token}`
    },
    params: {
      page: 1,
      perPage: 20,
      types: 'MESSAGE_INCOMING,SUBSCRIBE,UNSUBSCRIBE'
    }
  });

  return {
    type: actions.GETTING_NOTIFICATIONS,
    payload: request
  }
}
