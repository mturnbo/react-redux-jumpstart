import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from '../constants/userConstants';
import initialState from '../state/userState';

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        data: [...state.data, action.payload]
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const getUser = (state, id) => state.data.filter(user => user.id === id);
export const getUsers = state => state.data;
export const getUserPending = state => state.pending;
export const getUserError = state => state.error;

export default userReducer;
