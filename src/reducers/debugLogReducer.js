import {
  APPEND_LOG,
  CLEAR_LOG
} from '../constants/logConstants';
import { generateID } from '../utils';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case APPEND_LOG:
      return [
        {
          id: generateID(),
          logDate: new Date().toLocaleString(),
          msg: action.payload
        },
        ...state
      ];
    case CLEAR_LOG:
      return initialState;
    default:
      return state;
  }
};
