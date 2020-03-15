import 'react-native'
import React from 'react'
import { render } from 'react-native-testing-library'
import { ActivityIndicator } from 'react-native'
import { createProductCardContainer } from './product-card-container'
import { ProductCard } from './product-card'

describe('ProductCardContainer', () => {
  it('renders correctly', () => {
    const ProductCardContainer = createProductCardContainer({
      fetchProductData: jest.fn(),
    })
    const { toJSON } = render(<ProductCardContainer barcode="6414893012318" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('renders loading screen at the start', () => {
    const ProductCardContainer = createProductCardContainer({
      fetchProductData: jest.fn(),
    })
    const { getByType } = render(
      <ProductCardContainer barcode="6414893012318" />,
    )
    expect(getByType(ActivityIndicator))
  })

  it('renders product card if data fetch succeeded', async () => {
    const promise = Promise.resolve({})
    const fetchProductData = jest.fn<any, any>(() => promise)
    const ProductCardContainer = createProductCardContainer({
      fetchProductData,
    })
    const productCardContainer = (
      <ProductCardContainer barcode="6414893012318" />
    )
    const { getByType } = render(productCardContainer)
    expect(fetchProductData).toHaveBeenCalled()
    await promise
    expect(getByType(ProductCard))
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
