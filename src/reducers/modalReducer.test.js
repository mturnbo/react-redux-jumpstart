import { SHOW_MODAL } from '../constants/modalConstants';
import reducer from './modalReducer';
import initialState from '../state/modalState';

const mockCallBack = jest.fn();

const testModal = {
  title: 'modal title',
  message: 'modal message',
  display: true,
  onDismissClick: mockCallBack
};

describe('modal reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle show modal', () => {
    const expected = {
      ...testModal
    };
    expect(
      reducer({}, {
        type: SHOW_MODAL,
        payload: { ...testModal }
      })
    ).toEqual(expected);
  });
});
