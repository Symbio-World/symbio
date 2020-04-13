import React, { useState, useEffect } from 'react'
import {
  ProductData,
  NO_SEARCH_RESULTS_FOUND,
} from '@symbio/barcode-processor-core'
import { isFailureOfType } from '@symbio/ts-lib'
import { ErrorView } from '../ui-kit/ErrorView'
import { Loading } from '../ui-kit/Loading'
import { ProductView } from './ProductView'
import { ProductNotFound } from './ProductNotFound'
import { ObserveProductData } from './observeProductData'

type Props = {
  barcode: string
}

type Deps = {
  observeProductData: ObserveProductData
}

type CreateProductViewContainer = (deps: Deps) => React.FC<Props>
export const createProductViewContainer: CreateProductViewContainer = ({
  observeProductData,
}) => ({ barcode }) => {
  const [productData, setProductData] = useState<ProductData>()
  const [error, setError] = useState<unknown>()

  // TODO move out into own hook https://youtu.be/Urv82SGIu_0?t=730
  useEffect(() => {
    const subscription = observeProductData(barcode).subscribe(
      setProductData,
      (e) => {
        console.log('error occured', e)
        setError(e)
      },
    )
    return () => subscription.unsubscribe()
  }, [barcode])

  if (isFailureOfType(error, NO_SEARCH_RESULTS_FOUND))
    return <ProductNotFound barcode={barcode} />
  if (error) return <ErrorView error={error} />
  if (!productData) return <Loading />
  return <ProductView {...productData} />
}