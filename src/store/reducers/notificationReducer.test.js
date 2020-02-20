import { ADD_NOTIFICATION } from '../../constants/notificationConstants';
import reducer from './notificationReducer';
import initialState from '../state/notificationState';

const mockCallBack = jest.fn();

const testNotification = {
  title: 'Notification title',
  message: 'Notification message',
  display: true,
  onDismissClick: mockCallBack
};

describe('notification reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle add notification', () => {
    const expected = [{
      ...testNotification
    }];
    expect(
      reducer([], {
        type: ADD_NOTIFICATION,
        payload: { ...testNotification }
      })
    ).toEqual(expected);
  });
});
