import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ScanBarcodeScreen } from './barcode'
import { ProductViewScreen } from './product'

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
          name="ProductViewScreen"
          component={ProductViewScreen}
          options={{
            headerShown: true,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
