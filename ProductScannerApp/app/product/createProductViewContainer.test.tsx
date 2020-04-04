import React from 'react'
import { render } from 'react-native-testing-library'
import { ActivityIndicator } from 'react-native'
import * as Core from '@symbio/barcode-processor-core'
import { createProductViewContainer } from './createProductViewContainer'
import { ProductNotFound } from './ProductNotFound'
import { ProductView } from './ProductView'

describe('createProductViewContainer', () => {
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
    expect(getByType(ActivityIndicator)).toBeDefined()
  })

  it('calls process barcode', () => {
    const promise = Promise.resolve({ links: [] })
    const processBarcode: Core.ProcessBarcode = jest.fn(() => promise)
    const ProductViewContainer = createProductViewContainer({
      processBarcode,
    })
    const barcode = '6414893012311'
    const productViewContainer = <ProductViewContainer barcode={barcode} />
    render(productViewContainer)
    expect(processBarcode).toHaveBeenCalledWith(barcode)
  })

  it('renders no product found if product is empty', async () => {
    const promise = Promise.resolve({} as Core.ProductData)
    const processBarcode: Core.ProcessBarcode = jest.fn(() => promise)
    const ProductViewContainer = createProductViewContainer({
      processBarcode,
    })
    const productViewContainer = (
      <ProductViewContainer barcode="6414893012312" />
    )
    const { getByType } = render(productViewContainer)
    await promise
    expect(getByType(ProductNotFound)).toBeDefined()
  })

  it('renders product card if data fetch succeeded', async () => {
    const product = { name: 'Margarin', links: [] }
    const promise = Promise.resolve(product)
    const processBarcode: Core.ProcessBarcode = jest.fn(() => promise)
    const ProductViewContainer = createProductViewContainer({
      processBarcode,
    })
    const productViewContainer = (
      <ProductViewContainer barcode="6414893012313" />
    )
    const { getByType } = render(productViewContainer)
    await promise
    expect(getByType(ProductView)).toBeDefined()
  })
})
