import { bindActionCreators } from 'redux';
import store from '../store/configureStore';
import * as notificationActions from './notificationActions';
import * as modalActions from './modalActions';
import * as todoActions from './todoActions';
import * as debugLogActions from './debugLogActions';
import * as userActions from './userActions';

const actions = bindActionCreators({
  ...notificationActions,
  ...modalActions,
  ...todoActions,
  ...debugLogActions,
  ...userActions
}, store.dispatch);

export default actions;
