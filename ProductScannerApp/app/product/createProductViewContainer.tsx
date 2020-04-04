import React from 'react'
import useSWR from 'swr'
import * as R from 'ramda'
import { ProductData, ProcessBarcode } from '@symbio/barcode-processor-core'
import { Loading } from '../ui-kit/Loading'
import { Error } from '../ui-kit/Error'
import { ProductView } from './ProductView'
import { ProductNotFound } from './ProductNotFound'

type Props = {
  barcode: string
}

type Deps = {
  processBarcode: ProcessBarcode
}

type CreateProductViewContainer = (deps: Deps) => React.FC<Props>

export const createProductViewContainer: CreateProductViewContainer = ({
  processBarcode,
}) => ({ barcode }) => {
  const { data: productData, isValidating: isLoading, error } = useSWR<
    ProductData
  >(barcode, processBarcode)

  if (isLoading) return <Loading />
  if (error) return <Error error={error} />
  if (!productData || R.isEmpty(productData))
    return <ProductNotFound barcode={barcode} />
  return <ProductView {...productData} />
}
