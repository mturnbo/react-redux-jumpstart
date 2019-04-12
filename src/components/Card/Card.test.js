import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Card
      title="Test Card"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
