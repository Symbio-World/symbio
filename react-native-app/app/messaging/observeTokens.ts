import messaging from '@react-native-firebase/messaging'
import { from, merge, fromEventPattern } from 'rxjs'
import { ObserveTokens } from './messagingContext'

export const observeTokens: ObserveTokens = () => {
  const getToken$ = from(messaging().getToken())
  const onTokenRefresh$ = fromEventPattern<string>(
    (handler) => messaging().onTokenRefresh(handler),
    (_, unsubscribe) => unsubscribe(),
  )
  return merge(getToken$, onTokenRefresh$)
}
