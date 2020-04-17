import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ProductViewContainer } from './ProductViewContainer'
import { RootStackParamList } from '../Navigation'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'ProductScreen'>
  route: RouteProp<RootStackParamList, 'ProductScreen'>
}
export const ProductScreen: React.FC<Props> = ({ route, navigation }) => {
  const { barcode } = route.params

  const handleFeedbackPress = (title: string) => {
    navigation.navigate('FeedbackScreen', { title })
  }

  return (
    <ProductViewContainer
      barcode={barcode}
      onFeedbackPress={handleFeedbackPress}
    />
  )
}
