import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { ActivityIndicator } from 'react-native'

import { ProductCardContainer } from './product-card-container';
import { fetchProduct } from './product-api'
import { testProduct } from './product.fixture'
import { ProductCard } from './product-card'
import { ErrorCard } from './error-card'

jest.mock('./product-api')

it('renders correctly', () => {
  renderer.create(<ProductCardContainer barcode={'6414893012318'} />);
});

it('renders loading screen at the start', () => {
  testRenderer = renderer.create(<ProductCardContainer barcode={'6414893012318'} />);
  const testInstance = testRenderer.root
  const activityIndicators = testInstance.findAllByType(ActivityIndicator)
  expect(activityIndicators.length).toBe(1)
});

it('renders product card if data fetch succeeded', async () => {
  const promise = Promise.resolve(testProduct)
  fetchProduct.mockImplementationOnce(() => promise)
  testRenderer = renderer.create(<ProductCardContainer barcode={'6414893012318'} />);
  await promise
  await Promise.resolve()
  const testInstance = testRenderer.root
  const activityIndicators = testInstance.findAllByType(ActivityIndicator)
  // expect(activityIndicators.length).toBe(0)
  const productCards = testInstance.findAllByType(ProductCard)
  expect(productCards.length).toBe(1)
});

it('renders error card if error occured', async () => {
  const promise = Promise.reject(new Error())
  fetchProduct.mockImplementationOnce(() => promise)
  testRenderer = renderer.create(<ProductCardContainer barcode={'6414893012318'} />);
  await promise
  await Promise.resolve()
  const testInstance = testRenderer.root
  const activityIndicators = testInstance.findAllByType(ActivityIndicator)
  expect(activityIndicators.length).toBe(0)
  const productCards = testInstance.findAllByType(ErrorCard)
  expect(productCards.length).toBe(1)
});