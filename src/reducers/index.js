import { combineReducers } from 'redux';
import modal from './modalReducer';
import todo from './todoReducer';
import debugLog from './debugLogReducer';
import users from './userReducer';

export default combineReducers({
  modal,
  todo,
  debugLog,
  users
});
