import * as React from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SetupPrinciplesViewContainer } from './SetupPrinciplesViewContainer'
import { ModalStackParamList } from '../navigation/Navigation'

type Props = {
  navigation: StackNavigationProp<ModalStackParamList, 'SetupPrinciplesScreen'>
  route: RouteProp<ModalStackParamList, 'SetupPrinciplesScreen'>
}
export const SetupPrinciplesScreen: React.FC<Props> = ({ navigation }) => {
  const handleSave = () => {
    navigation.replace('Main', {})
  }

  return <SetupPrinciplesViewContainer onSave={handleSave} />
}
