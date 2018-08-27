import React from 'react';
import ReactShallowRednderer from 'react-test-renderer/shallow';
import Header from '../../src/components/Header'

test('should render Header correctly', () => {
  const renderer = new ReactShallowRednderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
