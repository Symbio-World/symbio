import * as React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { SetupPrinciplesViewContainer } from './SetupPrinciplesViewContainer'
import { RootStackParamList } from '../Navigation'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'SetupPrinciplesScreen'>
}
export const SetupPrinciplesScreen: React.FC<Props> = ({ navigation }) => {
  const handleSave = () => {
    navigation.navigate('ScanBarcodeScreen')
  }

  return <SetupPrinciplesViewContainer onSave={handleSave} />
}
