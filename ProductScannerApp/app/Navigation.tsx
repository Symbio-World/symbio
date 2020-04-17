import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import {
  cardStackScreenOptions,
  modalCardStackScreenOptions,
} from './NavigationConfig'
import { Home } from './Home'
import { Test } from './modals/Test'
import { Test1 } from './modals/Test1'

export type RootStackParamList = {
  Main: {}
  Modals: {}
}

export type MainModalStackParamList = {
  Home: {}
}

export type RootModalStackParamList = {
  Test: { modalsInStack: number }
  Test1: { modalsInStack: number }
}

const RootStack = createStackNavigator<RootStackParamList>()
const MainStack = createStackNavigator<MainModalStackParamList>()
const ModalStack = createStackNavigator<RootModalStackParamList>()

const ModalStackComponent = () => (
  <ModalStack.Navigator headerMode="none" {...modalCardStackScreenOptions}>
    <ModalStack.Screen
      name="Test"
      component={Test}
      initialParams={{ modalsInStack: 0 }}
      options={{
        gestureEnabled: false,
        headerShown: false,
        cardShadowEnabled: true,
      }}
    />
    <ModalStack.Screen
      name="Test1"
      component={Test1}
      initialParams={{ modalsInStack: 0 }}
      options={{
        gestureEnabled: false,
        headerShown: false,
        cardShadowEnabled: true,
      }}
    />
  </ModalStack.Navigator>
)

const MainStackComponent = () => (
  <MainStack.Navigator initialRouteName="Home" headerMode="none">
    <MainStack.Screen name="Home" component={Home} />
  </MainStack.Navigator>
)

export const RootStackView = () => {
  return (
    <RootStack.Navigator
      headerMode="none"
      initialRouteName="Main"
      {...cardStackScreenOptions}
    >
      <RootStack.Screen name="Main" component={MainStackComponent} />
      <RootStack.Screen name="Modals" component={ModalStackComponent} />
    </RootStack.Navigator>
  )
}
