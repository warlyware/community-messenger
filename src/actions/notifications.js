import axios from 'axios';

import API from '../API';
import * as actions from '../constants/actions';

export const getNotifications = () => dispatch => {
  dispatch({
    type: actions.GETTING_NOTIFICATIONS
  });

  axios.get(API.broadcasts.createdByMe, {
    page: 1,
    perPage: 20
  }).then(notifications => {
    dispatch({
      type: actions.NOTIFICATIONS_RECEIVED,
      payload: notifications
    });
  }).catch((error) => {
    console.error(error);
  });
}
