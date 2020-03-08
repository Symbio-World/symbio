/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Overlay } from './overlay';

it('renders correctly', () => {
  renderer.create(<Overlay />);
});
