import React from 'react';
import { shallow } from 'enzyme';
import SampleContent from './SampleContent';

describe('SampleContent', () => {
	test('should contain content container', () => {
		const wrapper = shallow(<SampleContent />);
		expect(wrapper.contains(<div className="sample-content">)).to.equal(true);
	});
});
