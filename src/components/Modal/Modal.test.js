import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

const mockCallBack = jest.fn();

describe('Modal', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Modal title="TEST" content="TEST" onDismissClick={mockCallBack} />);
    expect(wrapper).toMatchSnapshot();
  });
});
