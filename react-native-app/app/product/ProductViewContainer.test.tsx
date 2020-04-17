import { of, throwError } from 'rxjs'
import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { Loading } from '../ui-kit/Loading'
import { noSearchResultsFound } from '@symbio/barcode-processor-core'
import { ProductViewContainer } from './ProductViewContainer'
import { ProductNotFound } from './ProductNotFound'
import { ProductView } from './ProductView'
import { ErrorView } from '../ui-kit/ErrorView'
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

  it('renders loading screen at the start', () => {
    const { getByType } = render(<ProductViewContainer barcode={barcode} />)
    expect(getByType(Loading)).toBeDefined()
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

  it('triggers onFeedbackPress', () => {
    const handleFeedbackPress = jest.fn()
    const productData = { name: 'Margarin', links: [] }
    ;(observeProductData as jest.Mock).mockImplementation(() => of(productData))
    const { getByType } = render(
      <ProductViewContainer
        barcode={barcode}
        onFeedbackPress={handleFeedbackPress}
      />,
    )
    fireEvent(getByType(ProductView), 'onFeedbackPress', 'title').toBeDefined()
    expect(handleFeedbackPress).toHaveBeenCalledWith("Tell us what's missing")
  })

  it('renders error', () => {
    ;(observeProductData as jest.Mock).mockImplementation(() =>
      throwError('error'),
    )
    const { getByType } = render(<ProductViewContainer barcode={barcode} />)
    expect(getByType(ErrorView)).toBeDefined()
  })

  it('renders product not found', () => {
    ;(observeProductData as jest.Mock).mockImplementation(() =>
      throwError(noSearchResultsFound()),
    )
    const { getByType } = render(<ProductViewContainer barcode={barcode} />)
    expect(getByType(ProductNotFound)).toBeDefined()
  })
})
