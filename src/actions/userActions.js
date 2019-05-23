import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from '../constants/userConstants';

export const fetchUserPending = () => ({
  type: FETCH_USER_PENDING
});

export const fetchUserSuccess = data => ({
  type: FETCH_USER_SUCCESS,
  payload: data
});

export const fetchUserError = error => ({
  type: FETCH_USER_ERROR,
  error
});
