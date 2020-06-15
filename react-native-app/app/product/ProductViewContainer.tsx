import * as React from 'react'
import {
  NO_SEARCH_RESULTS_FOUND,
  NO_USEFUL_INFO_FOUND,
} from '@symbio/barcode-processor-core'
import { isFailureOfType } from '@symbio/ts-lib'
import { ErrorViewContainer } from '../error-handler/ErrorViewContainer'
import { ProductView } from './ProductView'
import { ProductNotFound } from './ProductNotFound'
import { observeProductData } from './observeProductData'
import { ObservableView } from '../lib/ObservableView'

const isProductNotFound = (error: unknown) =>
  isFailureOfType(error, NO_SEARCH_RESULTS_FOUND) ||
  isFailureOfType(error, NO_USEFUL_INFO_FOUND)

type Props = {
  barcode: string
  onFeedbackPress?: (title: string) => void
  onCloseButtonPress?: () => void
}
export const ProductViewContainer: React.FC<Props> = ({
  barcode,
  onFeedbackPress = () => {},
  onCloseButtonPress,
}) => {
  return (
    <ObservableView
      observable={observeProductData(barcode)}
      renderSuccess={(productData) => (
        <ProductView
          {...productData}
          onCloseButtonPress={onCloseButtonPress}
          onFeedbackPress={onFeedbackPress}
        />
      )}
      renderError={(error) =>
        isProductNotFound(error) ? (
          <ProductNotFound barcode={barcode} />
        ) : (
          <ErrorViewContainer error={error} onClose={onCloseButtonPress} />
        )
      }
    />
  )
}
