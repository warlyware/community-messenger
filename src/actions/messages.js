import axios from 'axios';

import API from '../api';
import * as actions from '../constants/actions';

export const getMessages = () => (dispatch, getState) => {
  dispatch({
    type: actions.GETTING_MESSAGES
  });

  const token = getState().user.token;

  axios.get(API.broadcasts.createdByMe , {
    headers: {
      Authorization: `Basic ${token}`
    },
    params: {
      page: 1,
      perPage: 20,
    }
  }).then(messages => {
    dispatch({
      type: actions.MESSAGES_RECEIVED,
      payload: messages.data.data
    });
  }).catch((error) => {
    console.error(error);
  });
}
