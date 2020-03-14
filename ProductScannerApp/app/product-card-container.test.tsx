import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { ActivityIndicator } from 'react-native'

import { createProductCardContainer } from './product-card-container'
import { ProductCard } from './product-card'

describe('ProductCardContainer', () => {
  it('renders correctly', () => {
    const fetchProductData = jest.fn<any, any>(() => Promise.resolve())
    const ProductCardContainer = createProductCardContainer({
      fetchProductData,
    })
    renderer.create(<ProductCardContainer barcode="6414893012318" />)
  })

  it('renders loading screen at the start', () => {
    const fetchProductData = jest.fn<any, any>(() => Promise.resolve())
    const ProductCardContainer = createProductCardContainer({
      fetchProductData,
    })
    const testRenderer = renderer.create(
      <ProductCardContainer barcode="6414893012318" />,
    )
    const testInstance = testRenderer.root
    const activityIndicators = testInstance.findAllByType(ActivityIndicator)
    expect(activityIndicators.length).toBe(1)
  })

  it('renders product card if data fetch succeeded', async () => {
    const promise = Promise.resolve({})
    const fetchProductData = jest.fn<any, any>(() => promise)
    const ProductCardContainer = createProductCardContainer({
      fetchProductData,
    })
    let testRenderer
    renderer.act(() => {
      testRenderer = renderer.create(
        <ProductCardContainer barcode={'6414893012318'} />,
      )
    })
    // @ts-ignore
    const testInstance = testRenderer.root
    let activityIndicators = testInstance.findAllByType(ActivityIndicator)
    expect(activityIndicators.length).toBe(1)

    await renderer.act(async () => {
      await promise
    })
    activityIndicators = testInstance.findAllByType(ActivityIndicator)
    expect(activityIndicators.length).toBe(0)
    const productCards = testInstance.findAllByType(ProductCard)
    expect(productCards.length).toBe(1)
  })

  // it('renders error card if error occurs', async () => {
  //   const promise = Promise.reject(new Error());
  //   (getProductData as jest.Mock).mockImplementationOnce(() => promise)
  //   const testRenderer = renderer.create(<ProductCardContainer barcode={'6414893012318'} />)
  //   await Promise.resolve()
  //   const testInstance = testRenderer.root
  //   const activityIndicators = testInstance.findAllByType(ActivityIndicator)
  //   expect(activityIndicators.length).toBe(0)
  //   const productCards = testInstance.findAllByType(Text)
  //   expect(productCards.length).toBe(1)
  // })
})
