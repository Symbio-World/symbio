import React from 'react'
import { Text } from 'react-native'
import useSWR from 'swr'
import { FetchProductData, ProductData } from 'fetcher-core'
import { Loading } from '../ui-kit/loading'
import { ProductCard } from './product-card'

type Props = {
  barcode: string
}

type Deps = {
  fetchProductData: FetchProductData
}

type CreateProductCardContainer = (deps: Deps) => React.FC<Props>

export const createProductCardContainer: CreateProductCardContainer = ({
  fetchProductData,
}) => ({ barcode }) => {
  const { data: product, error } = useSWR<ProductData>(barcode, fetchProductData)
  if (error) return <Text>Something went wrong: ${error.message}</Text>
  if (!product) return <Loading />
  return <ProductCard {...product} />
}
