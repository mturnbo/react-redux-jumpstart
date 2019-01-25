import React from 'react';
import { mount } from 'enzyme';
import HomePage from './index';

const wrapper = mount(<HomePage />);

test('HomePage Page Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
