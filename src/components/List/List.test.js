import React from 'react';
import { shallow } from 'enzyme';
import { arrayFill } from '../../utils';
import List from './List';

const listItems = arrayFill(7, i => `List Item ${i}`);

describe('List', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<List items={listItems} />);
    expect(wrapper).toMatchSnapshot();
  });
});
