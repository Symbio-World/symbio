import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { createProductViewContainer } from './createProductViewContainer'
import { observeProductData } from './observeProductData'
import { RootStackParamList } from '../Navigation'

const ProductViewContainer = createProductViewContainer({
  observeProductData,
})

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'ProductViewScreen'>
  route: RouteProp<RootStackParamList, 'ProductViewScreen'>
}
export const ProductViewScreen: React.FC<Props> = ({ route }) => {
  const { barcode } = route.params
  return <ProductViewContainer barcode={barcode} />
}
