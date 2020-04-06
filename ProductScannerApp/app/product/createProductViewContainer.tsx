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

  useEffect(() => {
    const subscription = observeProductData(barcode).subscribe(
      setProductData,
      setError,
    )
    return () => subscription.unsubscribe()
  }, [barcode])

  console.log('productData', productData)
  console.log('error', error)
  if (isFailureOfType(error, NO_SEARCH_RESULTS_FOUND))
    return <ProductNotFound barcode={barcode} />
  if (error) return <ErrorView error={error} />
  if (!productData) return <Loading />
  return <ProductView {...productData} />
}
