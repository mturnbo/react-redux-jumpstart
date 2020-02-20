import reducer from './todoReducer';
import initialState from '../state/todoState';

describe('todo reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
