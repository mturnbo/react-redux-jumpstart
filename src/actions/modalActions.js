import {
	SHOW_MODAL,
	HIDE_MODAL
} from '../constants/modalConstants';

export const showModal = (options = {}) => ({
	type: SHOW_MODAL,
	payload: {
		...options,
		display: true
	},
});

export const hideModal = () => ({
	type: HIDE_MODAL
});
