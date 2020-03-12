import React from 'react';
import { ActivityIndicator, Text } from 'react-native'

import { getProductData } from './get-product-data'
import { ProductCard } from './product-card'

export class ProductCardContainer extends React.Component {
  state = {}

  componentDidMount() {
    this.getProduct()
  }

  async getProduct() {
    const product = await getProductData(this.props.barcode)
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