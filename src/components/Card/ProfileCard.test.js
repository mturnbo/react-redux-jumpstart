import React from 'react';
import { shallow } from 'enzyme';
import profiles from 'test/fixtures/profiles.json';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<ProfileCard {...profiles[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
