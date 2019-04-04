import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from '../constants/todoConstants';

export const addTodoItem = text => ({
  type: ADD_TODO,
  payload: text
});

export const removeTodoItem = id => ({
  type: REMOVE_TODO,
  id
});

export const toggleTodoItem = id => ({
  type: TOGGLE_TODO,
  id
});
