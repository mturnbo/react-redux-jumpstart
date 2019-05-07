import React from 'react';
import { shallow } from 'enzyme/build';
import NotificationContainer from './NotificationContainer';

const wrapper = shallow(<NotificationContainer />);

describe('NotificationContainer', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
