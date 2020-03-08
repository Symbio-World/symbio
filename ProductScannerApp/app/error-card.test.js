import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {
  Button,
} from 'react-native-elements'

import { ErrorCard } from './error-card';

it('renders correctly', () => {
  renderer.create(<ErrorCard />);
});

it('triggers retry function on button click', () => {
  const testRetryFunction = jest.fn()
  const testRenderer = renderer.create(<ErrorCard retryFunction={testRetryFunction} />);
  const testInstance = testRenderer.root
  const button = testInstance.findByType(Button)
  button.props.onPress();
  expect(testRetryFunction.mock.calls.length).toBe(1)
});
