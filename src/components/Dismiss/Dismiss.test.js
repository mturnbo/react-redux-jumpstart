import React from 'react';
import { shallow } from 'enzyme';
import Dismiss from './Dismiss';

const mockCallBack = jest.fn();

describe('Dismiss', () => {
	test('should match snapshot', () => {
		const wrapper = shallow(<Dismiss onClick={mockCallBack} />);
		expect(wrapper).toMatchSnapshot();
	});
});
