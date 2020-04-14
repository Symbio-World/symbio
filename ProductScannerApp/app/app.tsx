import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './auth'
import { Host } from 'react-native-portalize'
import { enableScreens } from 'react-native-screens'
import { RootStackView } from './Navigation'

enableScreens()

export const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 100 })
  }, [])

  return (
    <Host>
      <AuthProvider>
        <StatusBar hidden />
        <NavigationContainer>
          <RootStackView />
        </NavigationContainer>
      </AuthProvider>
    </Host>
  )
}
