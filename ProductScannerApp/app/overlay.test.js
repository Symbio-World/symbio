import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from 'react-native-elements'

import { Overlay } from './overlay';

it('renders correctly', () => {
  renderer.create(<Overlay />);
});

it('on close icon click triggers onClose', () => {
  const testOnClose = jest.fn()
  testRenderer = renderer.create(<Overlay onClose={testOnClose} />);
  const testInstance = testRenderer.root
  const button = testInstance.findByType(Button)
  button.props.onPress();
  expect(testOnClose.mock.calls.length).toBe(1)
});
