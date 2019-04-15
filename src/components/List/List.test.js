import React from 'react';
import { shallow } from 'enzyme';
import { listItems } from 'test/fixtures/content.json';
import List from './List';

describe('List', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<List items={listItems} />);
    expect(wrapper).toMatchSnapshot();
  });
});
