import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import RNBootSplash from 'react-native-bootsplash'
import { Scanner } from './scanner'

export const Home = () => {
  const authenticate = async () => {
    await auth().signInAnonymously()
  }

  useEffect(() => {
    authenticate().then(() => {
      RNBootSplash.hide({ duration: 250 })
    })
  }, [])

  return <Scanner />
}
