import {
  APPEND_LOG,
  CLEAR_LOG
} from '../constants/logConstants';

export const appendLog = msg => ({
  type: APPEND_LOG,
  payload: msg
});

export const clearLog = () => ({
  type: CLEAR_LOG,
  payload: []
});
