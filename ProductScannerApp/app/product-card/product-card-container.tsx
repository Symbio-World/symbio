import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import {
  FetchProductData,
  ProductData,
} from 'fetcher-core'
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
  const [product, setProduct] = useState<ProductData>()
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
