import React from 'react';
import { shallow } from 'enzyme';
import Notification from './Notification';

const mockCallBack = jest.fn();

const testNotification = {
  type: 'info',
  title: 'TEST',
  message: 'TEST',
  onDismissClick: mockCallBack
};

describe('Notification', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Notification {...testNotification} />);
    expect(wrapper).toMatchSnapshot();
  });
});
