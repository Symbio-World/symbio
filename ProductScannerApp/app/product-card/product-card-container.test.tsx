import 'react-native'
import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { ActivityIndicator } from 'react-native'

import { createProductCardContainer } from './product-card-container'
import { ProductCard } from './product-card'

describe('ProductCardContainer', () => {
  it('renders correctly', () => {
    const fetchProductData = jest.fn<any, any>(() => Promise.resolve())
    const ProductCardContainer = createProductCardContainer({
      fetchProductData,
    })
    create(<ProductCardContainer barcode="6414893012318" />)
  })

  it('renders loading screen at the start', () => {
    const fetchProductData = jest.fn<any, any>(() => Promise.resolve())
    const ProductCardContainer = createProductCardContainer({
      fetchProductData,
    })
    const tree = create(
      <ProductCardContainer barcode="6414893012318" />,
    )
    const root = tree.root
    const activityIndicators = root.findAllByType(ActivityIndicator)
    expect(activityIndicators.length).toBe(1)
  })

  it('renders product card if data fetch succeeded', async () => {
    const promise = Promise.resolve({})
    const fetchProductData = jest.fn<any, any>(() => promise)
    const ProductCardContainer = createProductCardContainer({
      fetchProductData,
    })
    let tree: ReactTestRenderer
    act(() => {
      tree = create(
        <ProductCardContainer barcode={'6414893012318'} />,
      )
    })
    const root = tree!.root
    let activityIndicators = root.findAllByType(ActivityIndicator)
    expect(activityIndicators.length).toBe(1)

    await act(async () => {
      await promise
    })
    activityIndicators = root.findAllByType(ActivityIndicator)
    expect(activityIndicators.length).toBe(0)
    const productCards = root.findAllByType(ProductCard)
    expect(productCards.length).toBe(1)
  })

  // it('renders error card if error occurs', async () => {
  //   const promise = Promise.reject(new Error());
  //   (getProductData as jest.Mock).mockImplementationOnce(() => promise)
  //   const tree = renderer.create(<ProductCardContainer barcode={'6414893012318'} />)
  //   await Promise.resolve()
  //   const root = tree.root
  //   const activityIndicators = root.findAllByType(ActivityIndicator)
  //   expect(activityIndicators.length).toBe(0)
  //   const productCards = root.findAllByType(Text)
  //   expect(productCards.length).toBe(1)
  // })
})
