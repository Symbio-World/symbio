import * as React from 'react'
import {
  ProductData,
  NO_SEARCH_RESULTS_FOUND,
  noSearchResultsFound,
} from '@symbio/barcode-processor-core'
import { isFailureOfType } from '@symbio/ts-lib'
import { ErrorView } from '../ui-kit/ErrorView'
import { Loading } from '../ui-kit/Loading'
import { Timeout } from '../ui-kit/Timeout'
import { ProductView } from './ProductView'
import { ProductNotFound } from './ProductNotFound'
import { observeProductData } from './observeProductData'

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
  const [productData, setProductData] = React.useState<ProductData>()
  const [error, setError] = React.useState<unknown>()

  // TODO move out into own hook https://youtu.be/Urv82SGIu_0?t=730
  React.useEffect(() => {
    const subscription = observeProductData(barcode).subscribe(
      setProductData,
      (e) => {
        console.log('error occured', e)
        setError(e)
      },
    )
    return () => subscription.unsubscribe()
  }, [barcode])

  const handleTimeout = () => {
    setError(noSearchResultsFound)
  }

  if (isFailureOfType(error, NO_SEARCH_RESULTS_FOUND))
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
