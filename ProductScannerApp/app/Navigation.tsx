import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { cardStackScreenOptions } from './NavigationConfig'
import { Home } from './Home'
import { Test } from './modals/Test'

export type RootStackParamList = {
  Home: {}
  Modals: {}
}

export type RootModalStackParamList = {
  Test: { modalsInStack: number }
}

const RootStack = createStackNavigator<RootStackParamList>()
const ModalStack = createStackNavigator<RootModalStackParamList>()

const modalStackView = [
  <ModalStack.Screen
    name="Test"
    component={Test}
    initialParams={{ modalsInStack: 0 }}
    options={{
      headerShown: false,
      cardShadowEnabled: true,
    }}
  />,
]

export const RootStackView = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      headerMode="none"
      {...cardStackScreenOptions}
    >
      <RootStack.Screen name="Home" component={Home} />
      {modalStackView}
    </RootStack.Navigator>
  )
}
