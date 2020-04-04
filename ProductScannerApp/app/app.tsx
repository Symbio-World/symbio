import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { Home } from './Home'
import { AuthProvider } from './auth'

export const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 100 })
  }, [])

  return (
    <AuthProvider>
      <StatusBar hidden />
      <Home />
    </AuthProvider>
  )
}
