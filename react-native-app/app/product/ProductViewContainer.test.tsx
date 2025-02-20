import { of, throwError } from 'rxjs'
import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { Loading } from '../ui-kit/Loading'
import { Timeout } from '../lib/Timeout'
import {
  noSearchResultsFound,
  noUsefulInfoFound,
} from '@symbio/barcode-processor-core'
import { ProductViewContainer } from './ProductViewContainer'
import { ProductNotFound } from './ProductNotFound'
import { ProductView } from './ProductView'
import { ErrorViewContainer } from '../error-handler/ErrorViewContainer'
import { TimeoutView } from '../ui-kit/TimeoutView'
import { observeProductData } from './observeProductData'

jest.mock('./observeProductData')

describe('ProductViewContainer', () => {
  const barcode = '6414893012318'

  beforeEach(() => {
    ;(observeProductData as jest.Mock).mockImplementation(() => of())
  })

  it('renders correctly', () => {
    const { toJSON } = render(<ProductViewContainer barcode={barcode} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('renders loading screen for some time then renders timeout view', () => {
    const { getByType } = render(<ProductViewContainer barcode={barcode} />)
    expect(getByType(Loading)).toBeDefined()
    fireEvent(getByType(Timeout), 'onTimeout')
    expect(getByType(TimeoutView)).toBeDefined()
  })

  it('calls observeProductData', () => {
    render(<ProductViewContainer barcode={barcode} />)
    expect(observeProductData).toHaveBeenCalledWith(barcode)
  })

  it('renders product view', () => {
    const productData = { name: 'Margarin', links: [] }
    ;(observeProductData as jest.Mock).mockImplementation(() => of(productData))
    const { getByType } = render(<ProductViewContainer barcode={barcode} />)
    expect(getByType(ProductView)).toBeDefined()
  })

  it('renders error', () => {
    ;(observeProductData as jest.Mock).mockImplementation(() =>
      throwError('error'),
    )
    const { getByType } = render(<ProductViewContainer barcode={barcode} />)
    expect(getByType(ErrorViewContainer)).toBeDefined()
  })

  it('renders product not found on noSearchResultsFound', () => {
    ;(observeProductData as jest.Mock).mockImplementation(() =>
      throwError(noSearchResultsFound(barcode)),
    )
    const { getByType } = render(<ProductViewContainer barcode={barcode} />)
    expect(getByType(ProductNotFound)).toBeDefined()
  })

  it('renders product not found on noUsefulInfoFound', () => {
    ;(observeProductData as jest.Mock).mockImplementation(() =>
      throwError(noUsefulInfoFound(barcode, { links: [] })),
    )
    const { getByType } = render(<ProductViewContainer barcode={barcode} />)
    expect(getByType(ProductNotFound)).toBeDefined()
  })
})
