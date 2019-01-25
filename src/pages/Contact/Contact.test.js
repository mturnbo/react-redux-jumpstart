import React from 'react';
import { mount } from 'enzyme';
import ContactPage from './index';

const wrapper = mount(<ContactPage />);

test('ContactPage Page Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
