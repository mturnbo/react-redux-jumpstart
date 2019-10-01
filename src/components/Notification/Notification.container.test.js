import React from 'react';
import { shallow } from 'enzyme/build';
import NotificationContainer from './Notification.container';

const wrapper = shallow(<NotificationContainer />);

describe('NotificationContainer', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
