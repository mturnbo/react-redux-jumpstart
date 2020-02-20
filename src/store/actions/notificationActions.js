import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION
} from '../../constants/notificationConstants';
import createNotification from '../../factories/createNotification';

export const addNotification = (options = {}) => ({
  type: ADD_NOTIFICATION,
  payload: createNotification(options),
});

export const removeNotification = id => ({
  type: REMOVE_NOTIFICATION,
  payload: id
});
