import { ADD_NOTIFICATION } from '../constants/notificationConstants';
import * as actions from './notificationActions';

const testNotification = {
  title: 'Notification title',
  message: 'Notification message',
  display: true
};

describe('notification actions', () => {
  it('should create an action to add a notification', () => {
    const expectedAction = {
      type: ADD_NOTIFICATION,
      payload: {
        ...testNotification,
        id: 1
      }
    };
    expect(actions.addNotification(testNotification)).toEqual(expectedAction);
  });
});
