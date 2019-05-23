import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import TodoPage from './index';
import store from '../../store';

const wrapper = shallow(
  <Provider store={store}>
    <TodoPage />
  </Provider>
);

test('TodoPage Page Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
