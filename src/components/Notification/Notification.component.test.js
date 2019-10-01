import React from 'react';
import { shallow } from 'enzyme/build';
import NotificationComponent from './Notification.component';

const mockCallBack = jest.fn();

const testNotification = {
  type: 'info',
  title: 'TEST',
  message: 'TEST',
  onDismissClick: mockCallBack
};

describe('NotificationComponent', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<NotificationComponent {...testNotification} />);
    expect(wrapper).toMatchSnapshot();
  });
});
