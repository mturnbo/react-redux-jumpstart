import React from 'react';
import { shallow } from 'enzyme';
import Accordian from './Accordian';

const items = [
  {
    title: 'Item 1',
    content: '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Item 2',
    content: '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Item 3',
    content: '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

describe('Accordian', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Accordian items={items} />);
    expect(wrapper).toMatchSnapshot();
  });
});
