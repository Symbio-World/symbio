import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ScanBarcodeScreen } from './barcode'
import { ProductScreen } from './product'
import { FeedbackScreen } from './feedback'
import { SetupPrinciplesScreen } from './principle'
import {
  cardStackScreenOptions,
  modalCardStackScreenOptions,
} from './NavigationConfig'
import { createSwipableModal } from './ui-kit/SwipableModal'

export type RootStackParamList = {
  Main: {}
  Modals: {}

  // move it to modal stack https://reactnavigation.org/docs/modal
  SetupPrinciplesScreen: {}
}

export type MainStackParamList = {
  ScanBarcodeScreen: {}

  // move it to modal stack https://reactnavigation.org/docs/modal
  SetupPrinciplesScreen: {}
}

export type ModalStackParamList = {
  ProductScreen: { barcode: string }
  FeedbackScreen: { title: string }
}

const RootStack = createStackNavigator<RootStackParamList>()
const MainStack = createStackNavigator<MainStackParamList>()
const ModalStack = createStackNavigator<ModalStackParamList>()

const ModalStackComponent = () => {
  return (
    <ModalStack.Navigator
      mode="modal"
      headerMode="none"
      {...modalCardStackScreenOptions}
    >
      <ModalStack.Screen
        name="ProductScreen"
        component={createSwipableModal(ProductScreen)}
        options={{
          gestureEnabled: false,
          headerShown: false,
          cardShadowEnabled: true,
        }}
      />
      <ModalStack.Screen
        name="FeedbackScreen"
        component={createSwipableModal(FeedbackScreen)}
        options={{
          gestureEnabled: false,
          headerShown: false,
          cardShadowEnabled: true,
        }}
      />
    </ModalStack.Navigator>
  )
}

const MainStackComponent = () => {
  return (
    <MainStack.Navigator headerMode="none" initialRouteName="ScanBarcodeScreen">
      <MainStack.Screen
        name="ScanBarcodeScreen"
        component={ScanBarcodeScreen}
      />
    </MainStack.Navigator>
  )
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        mode="modal"
        initialRouteName="Main"
        {...cardStackScreenOptions}
      >
        <RootStack.Screen
          name="Main"
          component={MainStackComponent}
          options={{
            title: '',
          }}
        />
        <RootStack.Screen
          name="Modals"
          component={ModalStackComponent}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
