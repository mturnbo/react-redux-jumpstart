import { combineReducers } from 'redux';
import notifications from './notificationReducer';
import modal from './modalReducer';
import todo from './todoReducer';
import debugLog from './debugLogReducer';

export default combineReducers({
  notifications,
  modal,
  todo,
  debugLog
});
