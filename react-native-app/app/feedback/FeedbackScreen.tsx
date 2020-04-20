import * as React from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { FeedbackViewContainer } from './FeedbackViewContainer'
import { ModalStackParamList } from '../navigation/Navigation'

type Props = {
  navigation: StackNavigationProp<ModalStackParamList, 'FeedbackScreen'>
  route: RouteProp<ModalStackParamList, 'FeedbackScreen'>
}
export const FeedbackScreen: React.FC<Props> = ({ route }) => {
  const { title } = route.params
  return <FeedbackViewContainer title={title} />
}
