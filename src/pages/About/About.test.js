import React from 'react';
import { mount } from 'enzyme';
import AboutPage from './index';

const wrapper = mount(<AboutPage />);

test('AboutPage Page Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
