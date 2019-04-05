import { bindActionCreators } from 'redux';
import store from '../store/configureStore';
import * as notificationActions from './notificationActions';
import * as modalActions from './modalActions';
import * as todoActions from './todoActions';

const actions = bindActionCreators({
  ...notificationActions,
  ...modalActions,
  ...todoActions
}, store.dispatch);

export default actions;
