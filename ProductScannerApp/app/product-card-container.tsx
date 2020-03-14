import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Text } from 'react-native'

import {
  fetchProductData,
  FetchProductData,
  ProductData,
} from './fetch-product-data'
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
}) => props => {
  const [product, setProduct] = useState<ProductData>(null)
  // const [error, setError] = useState<Error>(null)

  const fetchProduct = async () => {
    const product = await fetchProductData(props.barcode)
    // .catch(error => {
    //   this.setState({
    //     error
    //   })
    // })
    setProduct(product)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  if (product) {
    return <ProductCard {...product} />
  }

  // if (error) {
  //   return <Text>There was an error, please retry</Text>
  // }

  return <ActivityIndicator size="large" color="#00ff00" />
}

export const ProductCardContainer = createProductCardContainer({
  fetchProductData,
})
