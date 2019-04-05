import React from 'react';
import { shallow } from 'enzyme';
import Dismiss from './Dismiss';

const mockCallBack = jest.fn();

describe('Dismiss', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Dismiss dismissCallback={mockCallBack} />);
    expect(wrapper).toMatchSnapshot();
  });
});
