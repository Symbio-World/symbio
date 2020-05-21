import * as React from 'react'
import { NO_SEARCH_RESULTS_FOUND } from '@symbio/barcode-processor-core'
import { isFailureOfType } from '@symbio/ts-lib'
import { ErrorView } from '../ui-kit/ErrorView'
import { Loading } from '../ui-kit/Loading'
import { Timeout } from '../ui-kit/Timeout'
import { ProductView } from './ProductView'
import { ProductNotFound } from './ProductNotFound'
import { observeProductData } from './observeProductData'
import { useObservable } from '../lib/useObservable'

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
  const { data: productData, error } = useObservable(
    barcode,
    observeProductData,
  )
  const [hasTimedOut, setHasTimedOut] = React.useState(false)

  const handleTimeout = () => {
    setHasTimedOut(true)
  }

  if (isFailureOfType(error, NO_SEARCH_RESULTS_FOUND) || hasTimedOut)
    return <ProductNotFound barcode={barcode} />
  if (error) return <ErrorView error={error} />
  if (!productData) {
    return (
      <Timeout durationInSeconds={5000} onTimeout={handleTimeout}>
        <Loading />
      </Timeout>
    )
  }
  return (
    <ProductView
      {...productData}
      onCloseButtonPress={onCloseButtonPress}
      onFeedbackPress={onFeedbackPress}
    />
  )
}
