import * as React from 'react'
import { useIsFocused } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackParamList } from '../navigation/Navigation'
import { ScanBarcodeViewContainer } from './ScanBarcodeViewContainer'

export type ScanBarcodeScreenNavigationType = StackNavigationProp<
  MainStackParamList,
  'ScanBarcodeScreen'
>

type Props = {
  navigation: ScanBarcodeScreenNavigationType
}
export const ScanBarcodeScreen: React.FC<Props> = ({ navigation }) => {
  const isFocused = useIsFocused()

  const handleScan = (barcode: string) => {
    navigation.navigate('Modals', {
      params: { barcode },
      screen: 'ProductScreen',
    })
  }

  return <ScanBarcodeViewContainer onScan={handleScan} isActive={isFocused} />
}
