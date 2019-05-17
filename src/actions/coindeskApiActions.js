import {
  FETCH_TOKEN_PENDING,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_ERROR
} from '../constants/coindeskApiConstants';

export function fetchTokenPending() {
  return {
    type: FETCH_TOKEN_PENDING
  };
}

export function fetchTokenSuccess(data) {
  return {
    type: FETCH_TOKEN_SUCCESS,
    payload: data
  };
}

export function fetchTokenError(error) {
  return {
    type: FETCH_TOKEN_ERROR,
    error
  };
}
