import * as React from 'react'
import {
  NavigationContainer,
  ParamListBase,
  NavigationContainerRef,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ScanBarcodeScreen } from '../barcode'
import { ProductScreen } from '../product'
import { GetUserEmailScreen } from '../get-user-email'
import { SetupPrinciplesScreen } from '../principle'
import {
  cardStackScreenOptions,
  modalCardStackScreenOptions,
} from './NavigationConfig'
import { createSwipableModal } from './createSwipableModal'

type SubNavigator<T extends ParamListBase> = {
  [K in keyof T]: { screen?: K; params?: T[K] }
}[keyof T]

export type RootStackParamList = {
  Main: {}
  Modals: {}
}

export type MainStackParamList = {
  ScanBarcodeScreen: {}
  Modals: SubNavigator<ModalStackParamList>
}

export type ModalStackParamList = {
  ProductScreen: { barcode: string }
  GetUserEmailScreen: {}
  SetupPrinciplesScreen: {}
  Main: SubNavigator<MainStackParamList>
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
        name="GetUserEmailScreen"
        component={createSwipableModal(GetUserEmailScreen)}
        options={{
          gestureEnabled: false,
          headerShown: false,
          cardShadowEnabled: true,
        }}
      />
      <ModalStack.Screen
        name="SetupPrinciplesScreen"
        component={createSwipableModal(SetupPrinciplesScreen)}
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

const navigationRef = React.createRef<NavigationContainerRef>()

export const navigate = <RouteName extends keyof RootStackParamList>(
  name: RouteName,
  args: RootStackParamList[RouteName],
) => {
  navigationRef.current?.navigate(name, args)
}

export const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
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
