import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { FeedbackViewContainer } from './FeedbackViewContainer'
import { RootStackParamList } from '../Navigation'

type Props = {
  route: RouteProp<RootStackParamList, 'FeedbackScreen'>
}
export const FeedbackScreen: React.FC<Props> = ({ route }) => {
  const { title } = route.params
  return <FeedbackViewContainer title={title} />
}
