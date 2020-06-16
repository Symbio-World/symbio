import * as React from 'react'
import { Text } from 'react-native'
import { of, Observable } from 'rxjs'
import { render, waitForElement } from 'react-native-testing-library'
import { useMessage } from './useMessage'
import { ObserveMessages } from './messagingContext'
import { AuthorizationStatus, RemoteMessage } from './types'

describe('useMessage', () => {
  const message = { notification: { body: 'body', title: 'title' } }
  let authorizationStatus: AuthorizationStatus
  let observeMessages: ObserveMessages

  beforeEach(() => {
    authorizationStatus = AuthorizationStatus.AUTHORIZED
    observeMessages = jest.fn(() => of(message))
  })

  it('returns message', async () => {
    const Component: React.FC<{}> = () => {
      const { message: m } = useMessage(authorizationStatus, observeMessages)
      return (
        <>
          <Text>{m?.notification?.body}</Text>
          <Text>{m?.notification?.title}</Text>
        </>
      )
    }
    const { getByText } = render(<Component />)

    await waitForElement(() => getByText(message.notification.body))
    expect(getByText(message.notification.body)).toBeDefined()
    expect(getByText(message.notification.title)).toBeDefined()
  })

  it('returns undefined if authorization status is denied', async () => {
    authorizationStatus = AuthorizationStatus.DENIED
    const defaultText1 = 'defaultText1'
    const defaultText2 = 'defaultText2'
    const Component: React.FC<{}> = () => {
      const { message: m } = useMessage(authorizationStatus, observeMessages)
      return (
        <>
          <Text>{m?.notification?.body || defaultText1}</Text>
          <Text>{m?.notification?.title || defaultText2}</Text>
        </>
      )
    }
    const { getByText } = render(<Component />)

    await waitForElement(() => getByText(defaultText1))
    expect(getByText(defaultText1)).toBeDefined()
    expect(getByText(defaultText2)).toBeDefined()
  })

  it('does not call observeMessages if authorization status is denied', async () => {
    authorizationStatus = AuthorizationStatus.DENIED
    const defaultText1 = 'defaultText1'
    const defaultText2 = 'defaultText2'
    const Component: React.FC<{}> = () => {
      const { message: m } = useMessage(authorizationStatus, observeMessages)
      return (
        <>
          <Text>{m?.notification?.body || defaultText1}</Text>
          <Text>{m?.notification?.title || defaultText2}</Text>
        </>
      )
    }
    const { getByText } = render(<Component />)

    await waitForElement(() => getByText(defaultText1))
    expect(observeMessages).toHaveBeenCalledTimes(0)
  })

  it('unsubscribes from observeMessages on unmount', async () => {
    const message$Subscription = {
      unsubscribe: jest.fn(),
    }
    const message$ = ({
      subscribe: () => message$Subscription,
    } as unknown) as Observable<RemoteMessage>
    observeMessages = jest.fn(() => message$)

    const defaultText = 'defaultText'
    const Component: React.FC<{}> = () => {
      const { message: m } = useMessage(authorizationStatus, observeMessages)
      return <Text>{m?.notification?.body || defaultText}</Text>
    }
    const { getByText, unmount } = render(<Component />)

    await waitForElement(() => getByText(defaultText))
    unmount()
    expect(message$Subscription.unsubscribe).toHaveBeenCalledTimes(1)
  })
})
