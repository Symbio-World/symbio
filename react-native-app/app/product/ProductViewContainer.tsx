import * as React from 'react'
import { NO_SEARCH_RESULTS_FOUND } from '@symbio/barcode-processor-core'
import { isFailureOfType } from '@symbio/ts-lib'
import { ErrorView } from '../ui-kit/ErrorView'
import { ProductView } from './ProductView'
import { ProductNotFound } from './ProductNotFound'
import { observeProductData } from './observeProductData'
import { ObservableView } from '../lib/ObservableView'

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
        isFailureOfType(error, NO_SEARCH_RESULTS_FOUND) ? (
          <ProductNotFound barcode={barcode} />
        ) : (
          <ErrorView error={error} onPress={onCloseButtonPress} />
        )
      }
    />
  )
}
