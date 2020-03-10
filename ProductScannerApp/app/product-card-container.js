import React from 'react';
import { ActivityIndicator, Text } from 'react-native'

import { fetchProduct } from './product-api'
import { ProductCard } from './product-card'

export class ProductCardContainer extends React.Component {
  state = {}

  componentDidMount() {
    this.fetchProduct()
  }

  async fetchProduct() {
    const product = await fetchProduct(this.props.barcode)
      .catch(error => {
        this.setState({
          error
        })
      })
    this.setState({ product })
  }

  render() {
    if (this.state.product) {
      return <ProductCard {...this.state.product} />
    }

    if (this.state.error) {
      return <Text>There was an error, please retry</Text>
    }

    return <ActivityIndicator size='large' color="#00ff00" />
  }
}