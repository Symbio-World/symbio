import 'react-native'
import React from 'react'
import { render } from 'react-native-testing-library'
import { ActivityIndicator } from 'react-native'
import { createProductViewContainer } from './product-view-container'
import { ProductView } from './product-view'

describe('ProductViewContainer', () => {
  it('renders correctly', () => {
    const ProductViewContainer = createProductViewContainer({
      fetchProductData: jest.fn(),
    })
    const { toJSON } = render(<ProductViewContainer barcode="6414893012318" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('renders loading screen at the start', () => {
    const ProductViewContainer = createProductViewContainer({
      fetchProductData: jest.fn(),
    })
    const { getByType } = render(
      <ProductViewContainer barcode="6414893012318" />,
    )
    expect(getByType(ActivityIndicator))
  })

  it('renders product card if data fetch succeeded', async () => {
    const promise = Promise.resolve({})
    const fetchProductData = jest.fn<any, any>(() => promise)
    const ProductViewContainer = createProductViewContainer({
      fetchProductData,
    })
    const productViewContainer = (
      <ProductViewContainer barcode="6414893012318" />
    )
    const { getByType } = render(productViewContainer)
    expect(fetchProductData).toHaveBeenCalled()
    await promise
    expect(getByType(ProductView))
  })
})
