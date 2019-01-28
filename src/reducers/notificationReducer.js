import {
	ADD_NOTIFICATION,
	REMOVE_NOTIFICATION
} from '../constants/notificationConstants';
import initialState from '../state/notificationState';

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_NOTIFICATION:
			return [action.payload, ...state];
		case REMOVE_NOTIFICATION:
			return state.filter(notification => notification.id !== action.payload);
		default:
			return state;
	}
};
