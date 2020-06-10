import messaging from '@react-native-firebase/messaging'
import { RequestPermission } from './messagingContext'

export const requestPermission: RequestPermission = () =>
  messaging().requestPermission()
