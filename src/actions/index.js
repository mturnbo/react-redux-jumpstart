import { bindActionCreators } from 'redux';
import store from '../store/configureStore';
import * as notificationActions from './notificationActions';
import * as modalActions from './modalActions';

const actions = bindActionCreators({
  ...notificationActions,
  ...modalActions
}, store.dispatch);

export default actions;
