import React from 'react'
import useSWR from 'swr'
import { FetchProductData, ProductData, NoDataFoundError } from '@symbio/fetcher-core'
import { Loading } from '../ui-kit/loading'
import { Error } from '../ui-kit/error'
import { ProductView } from './product-view'
import { ProductNotFound } from './product-not-found'

type Props = {
  barcode: string
}

type Deps = {
  fetchProductData: FetchProductData
}

type CreateProductViewContainer = (deps: Deps) => React.FC<Props>

export const createProductViewContainer: CreateProductViewContainer = ({
  fetchProductData,
}) => ({ barcode }) => {
  const { data: product, error } = useSWR<ProductData>(barcode, fetchProductData)

  if (error instanceof NoDataFoundError) return <ProductNotFound barcode={barcode} />
  if (error) return <Error error={error} />
  if (!product) return <Loading />
  return <ProductView {...product} />
}
