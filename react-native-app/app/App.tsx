import 'react-native-gesture-handler'
import * as React from 'react'
import { StatusBar } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { AuthProvider } from './auth'
import { Navigation } from './navigation/Navigation'

export const App: React.FC = () => {
  React.useEffect(() => {
    RNBootSplash.hide({ duration: 100 })
  }, [])

  return (
    <AuthProvider>
      <StatusBar hidden />
      <Navigation />
    </AuthProvider>
  )
}
