import * as React from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { GetUserEmailViewContainer } from './GetUserEmailViewContainer'
import { ModalStackParamList } from '../navigation/Navigation'

type Props = {
  navigation: StackNavigationProp<ModalStackParamList, 'GetUserEmailScreen'>
  route: RouteProp<ModalStackParamList, 'GetUserEmailScreen'>
}
export const GetUserEmailScreen: React.FC<Props> = ({ navigation }) => {
  const navigateOut = () => {
    navigation.pop()
  }
  return (
    <GetUserEmailViewContainer onSave={navigateOut} onClose={navigateOut} />
  )
}
