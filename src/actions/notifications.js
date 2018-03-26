import axios from 'axios';

import API from '../api';
import * as actions from '../constants/actions';

export const getNotifications = () => (dispatch, getState) => {
  dispatch({
    type: actions.GETTING_NOTIFICATIONS
  });

  const token = getState().user.token;

  axios.get(API.broadcasts.createdByMe, {
    headers: {
      Authorization: `Basic ${token}`
    },
    params: {
      page: 1,
      perPage: 20
    }
  }).then(notifications => {
    dispatch({
      type: actions.NOTIFICATIONS_RECEIVED,
      payload: notifications.data.data
    });
  }).catch((error) => {
    console.error(error);
  });
}
