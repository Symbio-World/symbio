import * as React from 'react'
import { useIsFocused } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../Navigation'
import { ScanBarcodeViewContainer } from './ScanBarcodeViewContainer'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'ScanBarcodeScreen'>
}
export const ScanBarcodeScreen: React.FC<Props> = ({ navigation }) => {
  const isFocused = useIsFocused()

  const navigateToProduct = (barcode: string) => {
    navigation.navigate('ProductScreen', { barcode })
  }

  return (
    <ScanBarcodeViewContainer
      navigateToProduct={navigateToProduct}
      isActive={isFocused}
    />
  )
}
