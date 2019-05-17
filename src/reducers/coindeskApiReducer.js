import {
  FETCH_TOKEN_PENDING,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_ERROR
} from '../constants/coindeskApiConstants';

const initialState = {
  pending: false,
  data: {},
  error: null
};

export function coindeskApiReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOKEN_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload
      };
    case FETCH_TOKEN_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const getTokenData = state => state.data;
export const getTokenPending = state => state.pending;
export const getTokenError = state => state.error;

export default coindeskApiReducer;
