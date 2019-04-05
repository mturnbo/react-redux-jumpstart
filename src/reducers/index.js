import { combineReducers } from 'redux';
import notifications from './notificationReducer';
import modal from './modalReducer';
import todo from './todoReducer';

export default combineReducers({
  notifications,
  modal,
  todo
});
