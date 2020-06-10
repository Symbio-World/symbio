import { FirebaseMessagingTypes } from '@react-native-firebase/messaging'

// copy paste of FirebaseMessagingTypes.AuthorizationStatus
export enum AuthorizationStatus {
  NOT_DETERMINED = -1,
  DENIED = 0,
  AUTHORIZED = 1,
  PROVISIONAL = 2,
}
export type RemoteMessage = FirebaseMessagingTypes.RemoteMessage
