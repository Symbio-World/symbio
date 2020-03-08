import React from 'react';
import { ActivityIndicator } from 'react-native'

import { fetchProduct } from './product-api'
import { ProductCard } from './product-card'
import { ErrorCard } from './error-card'

export class ProductCardContainer extends React.Component {
  state = {}

  componentDidMount() {
    this.fetchProduct()
  }

  async fetchProduct() {
    const { product, error } = await fetchProduct(this.props.barcode)
    console.log('product', product)
    this.setState({
      product,
      error
    })
  }

  render() {
    if (this.state.product) {
      return <ProductCard {...this.state.product} />
    }

    if (this.state.error) {
      return <ErrorCard retryFunction={this.fetchProduct} />
    }

    return <ActivityIndicator size='large' color="#00ff00" />
  }
}