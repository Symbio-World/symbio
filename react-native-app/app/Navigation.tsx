import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ScanBarcodeViewContainer } from './barcode'
import { ProductViewScreen } from './product'

export type RootStackParamList = {
  ScanBarcodeViewContainer: {}
  ProductViewScreen: { barcode: string }
}

const RootStack = createStackNavigator<RootStackParamList>()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="ScanBarcodeViewContainer">
        <RootStack.Screen
          name="ScanBarcodeViewContainer"
          component={ScanBarcodeViewContainer}
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
