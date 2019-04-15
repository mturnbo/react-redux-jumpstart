import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<ProgressBar value={25} max={100} />);
    expect(wrapper).toMatchSnapshot();
  });
});
