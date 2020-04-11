import { of, throwError } from 'rxjs'
// import { delay } from 'rxjs/operators'
import React from 'react'
import { render } from 'react-native-testing-library'
import { Loading } from '../ui-kit/Loading'
import { noSearchResultsFound } from '@symbio/barcode-processor-core'
import { createProductViewContainer } from './createProductViewContainer'
import { ObserveProductData } from './observeProductData'
import { ProductNotFound } from './ProductNotFound'
import { ProductView } from './ProductView'
import { ErrorView } from '../ui-kit/ErrorView'

describe('createProductViewContainer', () => {
  let observeProductData: ObserveProductData
  const barcode = '6414893012318'

  beforeEach(() => {
    observeProductData = jest.fn(() => of())
  })

  it('renders correctly', () => {
    const ProductViewContainer = createProductViewContainer({
      observeProductData,
    })
    const { toJSON } = render(<ProductViewContainer barcode={barcode} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('renders loading screen at the start', () => {
    const ProductViewContainer = createProductViewContainer({
      observeProductData,
    })
    const { getByType } = render(<ProductViewContainer barcode={barcode} />)
    expect(getByType(Loading)).toBeDefined()
  })

  it('calls observeProductData', () => {
    const ProductViewContainer = createProductViewContainer({
      observeProductData,
    })
    const productViewContainer = <ProductViewContainer barcode={barcode} />
    render(productViewContainer)
    expect(observeProductData).toHaveBeenCalledWith(barcode)
  })

  it('renders product view', () => {
    const productData = { name: 'Margarin', links: [] }
    observeProductData = jest.fn(() => of(productData))
    const ProductViewContainer = createProductViewContainer({
      observeProductData,
    })
    const productViewContainer = <ProductViewContainer barcode={barcode} />
    const { getByType } = render(productViewContainer)
    expect(getByType(ProductView)).toBeDefined()
  })

  it('renders error', () => {
    observeProductData = jest.fn(() => throwError('error'))
    const ProductViewContainer = createProductViewContainer({
      observeProductData,
    })
    const productViewContainer = <ProductViewContainer barcode={barcode} />
    const { getByType } = render(productViewContainer)
    expect(getByType(ErrorView)).toBeDefined()
  })

  it('renders product not found', () => {
    observeProductData = jest.fn(() => throwError(noSearchResultsFound()))
    const ProductViewContainer = createProductViewContainer({
      observeProductData,
    })
    const productViewContainer = <ProductViewContainer barcode={barcode} />
    const { getByType } = render(productViewContainer)
    expect(getByType(ProductNotFound)).toBeDefined()
  })
})
