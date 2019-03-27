import React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';

const wrapper = shallow(<Content title="TEST" text="TEST" />);

describe('Content', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should contain title element', () => {
    expect(wrapper.containsMatchingElement(<div className="title">TEST</div>)).toBe(true);
  });
  it('should contain text element', () => {
    expect(wrapper.containsMatchingElement(<div className="text">TEST</div>)).toBe(true);
  });
});
