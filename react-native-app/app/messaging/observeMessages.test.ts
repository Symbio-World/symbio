import messaging from '@react-native-firebase/messaging'
import { take } from 'rxjs/operators'
import { observeMessages } from './observeMessages'
import { RemoteMessage } from './types'

jest.mock('@react-native-firebase/messaging')

describe('observeMessages', () => {
  const initialNotification: RemoteMessage = {
    notification: { body: 'initialNotification' },
  }
  const getInitialNotification = jest.fn(() =>
    Promise.resolve(initialNotification),
  )

  const notificationFromOnMessage: RemoteMessage = {
    notification: { body: 'notificationFromOnMessage' },
  }
  const onMessage = jest.fn((handler) => handler(notificationFromOnMessage))

  const notificationFromOnNotificationOpenedApp: RemoteMessage = {
    notification: { body: 'notificationFromOnNotificationOpenedApp' },
  }
  const onNotificationOpenedApp = jest.fn((handler) =>
    handler(notificationFromOnNotificationOpenedApp),
  )

  beforeEach(() => {
    ;((messaging as unknown) as jest.Mock).mockImplementation(() => ({
      getInitialNotification,
      onMessage,
      onNotificationOpenedApp,
    }))
  })

  it('gets initial notification', (done) => {
    const token$ = observeMessages()
    token$.pipe(take(0)).subscribe({
      next: (t) => {
        expect(t).toEqual(initialNotification)
      },
      complete: () => done(),
    })
  })

  it('gets notification from onMessage', (done) => {
    const token$ = observeMessages()
    token$.pipe(take(1)).subscribe({
      next: (t) => {
        expect(t).toEqual(notificationFromOnMessage)
      },
      complete: () => done(),
    })
  })

  it('gets notification from onNotificationOpenedApp', (done) => {
    const token$ = observeMessages()
    token$.pipe(take(2)).subscribe({
      next: (t) => {
        expect(t).toEqual(notificationFromOnNotificationOpenedApp)
      },
      complete: () => done(),
    })
  })
})
