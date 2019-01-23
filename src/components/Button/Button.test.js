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

describe('Button', () => {
	test('should match snapshot', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper).toMatchSnapshot();
	});
	test('click event', () => {
		const mockCallBack = jest.fn();
		const wrapper = shallow((<Button label={labels.click} onClick={mockCallBack} />));
		wrapper.find('button').simulate('click');
		expect(mockCallBack).toHaveBeenCalled();
	});
});
