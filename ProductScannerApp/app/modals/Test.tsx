import * as React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { ModalCard } from '../ui-kit/ModalCard'
import { RootModalStackParamList } from '../Navigation'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type TestScreenRouteProp = RouteProp<RootModalStackParamList, 'Test'>

type TestScreenNavigationProp = StackNavigationProp<
  RootModalStackParamList,
  'Test'
>

type TestProps = {
  route: TestScreenRouteProp
  navigation: TestScreenNavigationProp
}

export const Test: React.FC<TestProps> = ({ route, navigation }) => {
  const { modalsInStack } = route.params
  return (
    <ModalCard modalsInStack={modalsInStack}>
      <View style={[t.m10, { height: '80%' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    </ModalCard>
  )
}
