import { combineReducers } from 'redux';
import notifications from './notificationReducer';
import modal from './modalReducer';
import todo from './todoReducer';
import debugLog from './debugLogReducer';
import users from './userReducer';

export default combineReducers({
  notifications,
  modal,
  todo,
  debugLog,
  users
});
