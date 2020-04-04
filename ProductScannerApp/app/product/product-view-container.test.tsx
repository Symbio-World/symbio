import 'react-native'
import React from 'react'
import { render } from 'react-native-testing-library'
import { ActivityIndicator } from 'react-native'
import { createProductViewContainer } from './product-view-container'
import { ProductNotFound } from './product-not-found'
import { ProductView } from './product-view'

describe('ProductViewContainer', () => {
  it('renders correctly', () => {
    const ProductViewContainer = createProductViewContainer({
      processBarcode: jest.fn(),
    })
    const { toJSON } = render(<ProductViewContainer barcode="6414893012318" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('renders loading screen at the start', () => {
    const ProductViewContainer = createProductViewContainer({
      processBarcode: jest.fn(),
    })
    const { getByType } = render(
      <ProductViewContainer barcode="6414893012318" />,
    )
    expect(getByType(ActivityIndicator))
  })

  it('calls process barcode', async () => {
    const promise = Promise.resolve({})
    const processBarcode = jest.fn<any, any>(() => promise)
    const ProductViewContainer = createProductViewContainer({
      processBarcode,
    })
    const barcode = '6414893012311'
    const productViewContainer = <ProductViewContainer barcode={barcode} />
    render(productViewContainer)
    expect(processBarcode).toHaveBeenCalledWith(barcode)
  })

  it('renders no product found if product is empty', async () => {
    const promise = Promise.resolve({})
    const processBarcode = jest.fn<any, any>(() => promise)
    const ProductViewContainer = createProductViewContainer({
      processBarcode,
    })
    const productViewContainer = (
      <ProductViewContainer barcode="6414893012312" />
    )
    const { getByType } = render(productViewContainer)
    await promise
    expect(getByType(ProductNotFound))
  })

  it('renders product card if data fetch succeeded', async () => {
    const product = { name: 'Margarin' }
    const promise = Promise.resolve(product)
    const processBarcode = jest.fn<any, any>(() => promise)
    const ProductViewContainer = createProductViewContainer({
      processBarcode,
    })
    const productViewContainer = (
      <ProductViewContainer barcode="6414893012313" />
    )
    const { getByType } = render(productViewContainer)
    await promise
    expect(getByType(ProductView))
  })
})
