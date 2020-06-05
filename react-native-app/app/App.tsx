import 'react-native-gesture-handler'
import * as React from 'react'
import { StatusBar, Alert } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { AuthProvider } from './auth'
import { Navigation } from './navigation'
import messaging from '@react-native-firebase/messaging'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

async function saveTokenToDatabase(token) {
  // Assume user is already signed in
  const userId = auth().currentUser.uid

  // Add the token to the users datastore
  await firestore()
    .collection('tokens')
    .doc(userId)
    .update({
      tokens: firestore.FieldValue.arrayUnion(token),
    })
}

const requestUserPermission = async () => {
  const authorizationStatus = await messaging().requestPermission()
  await messaging().registerDeviceForRemoteMessages()
  console.log('Permission status:', authorizationStatus)
}

export const App: React.FC = () => {
  const [isPermissionGranted, setIsPermissionGranted] = React.useState(false)
  React.useEffect(() => {
    RNBootSplash.hide({ duration: 100 })
    messaging()
      .requestPermission()
      .then((authStatus) => {
        console.log('Authentication status: ', authStatus)
        setIsPermissionGranted(true)
      })
  }, [])

  React.useEffect(() => {
    if (isPermissionGranted) {
      console.log('getting FCM token')
      // Get the device token
      messaging()
        .getToken()
        .then((token) => {
          console.log('Token:', token)
        })

      const unsubscribeFromMessages = messaging().onMessage(
        async (remoteMessage) => {
          Alert.alert(
            'A new FCM message arrived!',
            JSON.stringify(remoteMessage),
          )
        },
      )

      // Listen to whether the token changes
      const unsubscribeFromTokenRefresh = messaging().onTokenRefresh(
        (token) => {
          console.log('Token:', token)
        },
      )
      return () => {
        unsubscribeFromMessages()
        unsubscribeFromTokenRefresh()
      }
    }
  }, [isPermissionGranted])

  return (
    <AuthProvider>
      <StatusBar hidden />
      <Navigation />
    </AuthProvider>
  )
}
