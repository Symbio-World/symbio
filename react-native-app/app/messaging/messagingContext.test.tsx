import * as React from 'react'
import { Text } from 'react-native'
import { of } from 'rxjs'
import { render, waitForElement } from 'react-native-testing-library'
import {
  createMessagingProvider,
  useMessaging,
  RequestPermission,
  ObserveTokens,
  ObserveMessages,
} from './messagingContext'
import { AuthorizationStatus, RemoteMessage } from './types'
import { ObservableView } from '../lib/ObservableView'

describe('messagingContext', () => {
  let requestPermission: RequestPermission
  let observeTokens: ObserveTokens
  let observeMessages: ObserveMessages

  beforeEach(() => {
    requestPermission = jest.fn(() =>
      Promise.resolve(AuthorizationStatus.AUTHORIZED),
    )
    observeTokens = jest.fn(() => of())
    observeMessages = jest.fn(() => of())
  })

  it('renders correctly', () => {
    const MessagingProvider = createMessagingProvider({
      requestPermission,
      observeTokens,
      observeMessages,
    })
    const { toJSON } = render(
      <MessagingProvider>
        <Text>Test</Text>
      </MessagingProvider>,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('requests permission', () => {
    const MessagingProvider = createMessagingProvider({
      requestPermission,
      observeTokens,
      observeMessages,
    })
    render(
      <MessagingProvider>
        <Text>Test</Text>
      </MessagingProvider>,
    )
    expect(requestPermission).toHaveBeenCalled()
  })

  it('calls observeTokens and observeMessages if permission is granted', async () => {
    const MessagingProvider = createMessagingProvider({
      requestPermission,
      observeTokens,
      observeMessages,
    })
    const { getByText } = render(
      <MessagingProvider>
        <Text>Test</Text>
      </MessagingProvider>,
    )

    await waitForElement(() => getByText('Test'))
    expect(observeTokens).toHaveBeenCalled()
    expect(observeMessages).toHaveBeenCalled()
  })

  it('does not call observeTokens and observeMessages if permission is denied', async () => {
    requestPermission = jest.fn(() =>
      Promise.resolve(AuthorizationStatus.DENIED),
    )
    const MessagingProvider = createMessagingProvider({
      requestPermission,
      observeTokens,
      observeMessages,
    })
    const { getByText } = render(
      <MessagingProvider>
        <Text>Test</Text>
      </MessagingProvider>,
    )

    await waitForElement(() => getByText('Test'))
    expect(observeTokens).toHaveBeenCalledTimes(0)
    expect(observeTokens).toHaveBeenCalledTimes(0)
  })

  it('tokens can be consumed', async () => {
    const token = 'token'
    observeTokens = jest.fn(() => of(token))
    const MessagingProvider = createMessagingProvider({
      requestPermission,
      observeTokens,
      observeMessages,
    })
    const Child = () => {
      const { token$ } = useMessaging()

      return (
        <ObservableView
          observable={token$}
          renderSuccess={(token?: string) => <Text>{token}</Text>}
        />
      )
    }
    const { getByText } = render(
      <MessagingProvider>
        <Child />
      </MessagingProvider>,
    )

    await waitForElement(() => getByText(token))
    expect(getByText(token)).toBeDefined()
  })

  it('messages can be consumed', async () => {
    const message = { notification: { body: 'body', title: 'title' } }
    observeMessages = jest.fn(() => of(message))

    const MessagingProvider = createMessagingProvider({
      requestPermission,
      observeTokens,
      observeMessages,
    })
    const Child = () => {
      const { message$ } = useMessaging()

      return (
        <ObservableView
          observable={message$}
          renderSuccess={(m?: RemoteMessage) => (
            <>
              <Text>{m?.notification?.title}</Text>
              <Text>{m?.notification?.body}</Text>
            </>
          )}
        />
      )
    }
    const { getByText } = render(
      <MessagingProvider>
        <Child />
      </MessagingProvider>,
    )

    await waitForElement(() => getByText(message.notification.title))
    expect(getByText(message.notification.title)).toBeDefined()
    expect(getByText(message.notification.body)).toBeDefined()
  })

  // TODO: test unsubscribe
})
