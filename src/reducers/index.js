import { combineReducers } from 'redux';
import notifications from './notificationReducer';
import modal from './modalReducer';
import todo from './todoReducer';
import debugLog from './debugLogReducer';
import token from './coindeskApiReducer';

export default combineReducers({
  notifications,
  modal,
  todo,
  debugLog,
  token
});
