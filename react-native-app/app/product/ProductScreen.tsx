import * as React from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ProductViewContainer } from './ProductViewContainer'
import { ModalStackParamList } from '../navigation/Navigation'

type Props = {
  navigation: StackNavigationProp<ModalStackParamList, 'ProductScreen'>
  route: RouteProp<ModalStackParamList, 'ProductScreen'>
}
export const ProductScreen: React.FC<Props> = ({ route, navigation }) => {
  const { barcode } = route.params

  return <ProductViewContainer barcode={barcode} onClose={navigation.goBack} />
}
