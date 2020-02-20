import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from '../../constants/todoConstants';
import { generateID } from '../../utils';
import initialState from '../state/todoState';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: generateID(),
          text: action.payload,
          complete: false
        }
      ];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map(todo => (todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo));
    default:
      return state;
  }
};
