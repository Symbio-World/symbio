import * as React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { SwipableModal } from '../ui-kit/SwipableModal'
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

export const Test1: React.FC<TestProps> = ({ route, navigation }) => {
  const handleSnap = ({ nativeEvent: { x } }) => {
    if (x !== 0) {
      navigation.goBack()
    }
  }
  return (
    <SwipableModal onSnap={handleSnap}>
      <View style={[{ height: '80%' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    </SwipableModal>
  )
}
