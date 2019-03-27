import { combineReducers } from 'redux';
import notifications from './notificationReducer';
import modal from './modalReducer';

export default combineReducers({
  notifications,
  modal
});
