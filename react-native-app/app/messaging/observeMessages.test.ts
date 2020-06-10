import messaging from '@react-native-firebase/messaging'
import { take } from 'rxjs/operators'
import { observeMessages } from './observeMessages'
import { RemoteMessage } from './types'

jest.mock('@react-native-firebase/messaging')

describe('observeMessages', () => {
  let initialNotification: RemoteMessage = {
    notification: { body: 'initialNotification' },
  }
  let getInitialNotification = jest.fn(() =>
    Promise.resolve(initialNotification),
  )

  let notificationFromOnMessage: RemoteMessage = {
    notification: { body: 'notificationFromOnMessage' },
  }
  let onMessage = jest.fn((handler) => handler(notificationFromOnMessage))

  let notificationFromOnNotificationOpenedApp: RemoteMessage = {
    notification: { body: 'notificationFromOnNotificationOpenedApp' },
  }
  let onNotificationOpenedApp = jest.fn((handler) =>
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
