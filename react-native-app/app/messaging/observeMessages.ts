import messaging from '@react-native-firebase/messaging'
import { from, Observable, merge, fromEventPattern } from 'rxjs'
import { filter } from 'rxjs/operators'
import { ObserveMessages } from './messagingContext'
import { RemoteMessage } from './types'

export const observeMessages: ObserveMessages = () => {
  const getInitialNotification$ = from(messaging().getInitialNotification())
  const onMessage$ = fromEventPattern<RemoteMessage>(
    (handler) => messaging().onMessage(handler),
    (_, unsubscribe) => unsubscribe(),
  )
  const onNotificationOpenedApp$ = fromEventPattern<RemoteMessage>(
    (handler) => messaging().onNotificationOpenedApp(handler),
    (_, unsubscribe) => unsubscribe(),
  )
  return merge(
    getInitialNotification$,
    onMessage$,
    onNotificationOpenedApp$,
  ).pipe(filter((message) => !!message)) as Observable<RemoteMessage>
}
