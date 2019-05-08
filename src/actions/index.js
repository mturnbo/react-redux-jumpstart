import { bindActionCreators } from 'redux';
import store from '../store/configureStore';
import * as notificationActions from './notificationActions';
import * as modalActions from './modalActions';
import * as todoActions from './todoActions';
import * as debugLogActions from './debugLogActions';

const actions = bindActionCreators({
  ...notificationActions,
  ...modalActions,
  ...todoActions,
	...debugLogActions
}, store.dispatch);

export default actions;
