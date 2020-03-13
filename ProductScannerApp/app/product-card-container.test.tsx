import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { ActivityIndicator, Text } from 'react-native'

import { ProductCardContainer } from './product-card-container';
import { getProductData } from './get-product-data'
import { ProductCard } from './product-card'

jest.mock('./get-product-data')

describe('ProductCardContainer', () => {
  it('renders correctly', () => {
    renderer.create(<ProductCardContainer barcode={'6414893012318'} />);
  })

  it('renders loading screen at the start', () => {
    const testRenderer = renderer.create(<ProductCardContainer barcode={'6414893012318'} />);
    const testInstance = testRenderer.root
    const activityIndicators = testInstance.findAllByType(ActivityIndicator)
    expect(activityIndicators.length).toBe(1)
  })

  it('renders product card if data fetch succeeded', async () => {
    const promise = Promise.resolve({})
    getProductData.mockImplementationOnce(() => promise)
    const testRenderer = renderer.create(<ProductCardContainer barcode={'6414893012318'} />);
    await promise
    await Promise.resolve()
    const testInstance = testRenderer.root
    const activityIndicators = testInstance.findAllByType(ActivityIndicator)
    expect(activityIndicators.length).toBe(0)
    const productCards = testInstance.findAllByType(ProductCard)
    expect(productCards.length).toBe(1)
  })

  it('renders error card if error occurs', async () => {
    const promise = Promise.reject(new Error())
    getProductData.mockImplementationOnce(() => promise)
    const testRenderer = renderer.create(<ProductCardContainer barcode={'6414893012318'} />)
    await Promise.resolve()
    const testInstance = testRenderer.root
    const activityIndicators = testInstance.findAllByType(ActivityIndicator)
    expect(activityIndicators.length).toBe(0)
    const productCards = testInstance.findAllByType(Text)
    expect(productCards.length).toBe(1)
  })
})
