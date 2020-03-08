/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { testSession } from './scanner.fixture'
import { Scanner } from './scanner'
import { Overlay } from './overlay'

it('renders correctly', () => {
  renderer.create(<Scanner />);
});

it('renders 0 overlays at the start', () => {
  const testRenderer = renderer.create(<Scanner />)
  const testInstance = testRenderer.root
  const overlays = testInstance.findAllByType(Overlay)
  expect(overlays.length).toBe(0)
});

it('renders correct number of overlays when scanned', () => {
  const testRenderer = renderer.create(<Scanner />)
  const testInstance = testRenderer.root
  testRenderer.getInstance().onRecognizeNewCodes(testSession)
  const overlays = testInstance.findAllByType(Overlay)
  expect(overlays.length).toBe(testSession.allTrackedCodes.length)
});
