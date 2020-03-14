import React, { useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { Scanner } from './scanner'
import { AuthProvider } from './auth'

export const Home = () => {
  useEffect(() => {
      RNBootSplash.hide({ duration: 0 })
  }, [])

  return (
    <AuthProvider>
      <Scanner />
    </AuthProvider>
  )
}
