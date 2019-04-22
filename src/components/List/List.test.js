import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

const listItems = Array(5).fill().map((val, idx) => `List Item ${idx}`);

describe('List', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<List items={listItems} />);
    expect(wrapper).toMatchSnapshot();
  });
});
