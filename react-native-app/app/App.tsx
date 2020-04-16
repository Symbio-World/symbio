import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { AuthProvider } from './auth'
import { Navigation } from './Navigation'

export const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 100 })
  }, [])

  return (
    <AuthProvider>
      <StatusBar hidden />
      <Navigation />
    </AuthProvider>
  )
}
