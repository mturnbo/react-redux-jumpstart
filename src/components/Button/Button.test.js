import React from 'react';
import { shallow } from 'enzyme';
import labels from '@test/fixtures/labels.json';
import Button from './Button';

const mockCallBack = jest.fn();

describe('Button', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Button label={labels.default} onClick={mockCallBack} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('click event', () => {
    const wrapper = shallow((<Button label={labels.click} onClick={mockCallBack} />));
    wrapper.find('button').simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });
});
