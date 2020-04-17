import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ScanBarcodeScreen } from './barcode'
import { ProductScreen } from './product'
import { FeedbackScreen } from './feedback'
import { SetupPrinciplesScreen } from './principle'

export type RootStackParamList = {
  ScanBarcodeScreen: {}
  ProductScreen: { barcode: string }
  FeedbackScreen: { title: string }

  // move it to modal stack https://reactnavigation.org/docs/modal
  SetupPrinciplesScreen: {}
}

const RootStack = createStackNavigator<RootStackParamList>()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="ScanBarcodeScreen">
        <RootStack.Screen
          name="ScanBarcodeScreen"
          component={ScanBarcodeScreen}
        />
        <RootStack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={{
            headerShown: true,
          }}
        />
        <RootStack.Screen
          name="FeedbackScreen"
          component={FeedbackScreen}
          options={{
            headerShown: true,
          }}
        />
        <RootStack.Screen
          name="SetupPrinciplesScreen"
          component={SetupPrinciplesScreen}
          options={{
            headerShown: true,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
