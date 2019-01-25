import React from 'react';
import { shallow } from 'enzyme';
import profiles from 'data/profiles.json';
import Card from './Card';

describe('Card', () => {
	test('should match snapshot', () => {
		const wrapper = shallow(<Card {...profiles[0]} />);
		expect(wrapper).toMatchSnapshot();
	});
});
