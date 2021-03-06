import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../constants/modalConstants';
import initialState from '../state/modalState';

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload;
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};
