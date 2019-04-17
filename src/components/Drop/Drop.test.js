import React from 'react';
import { shallow } from 'enzyme';
import Drop from './Drop';

describe('Drop', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Drop mode="click">DROP</Drop>);
    expect(wrapper).toMatchSnapshot();
  });
});
