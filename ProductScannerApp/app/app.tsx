import React, { useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { Home } from './home'
import { AuthProvider } from './auth'

export const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 100 })
  }, [])

  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  )
}
