import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const labels = {
  default: 'Hello',
  success: 'Succes',
  error: 'Error',
  warning: 'Warning',
  click: 'Click Me'
};

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
