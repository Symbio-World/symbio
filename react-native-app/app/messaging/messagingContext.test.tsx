import * as React from 'react'
import { Text } from 'react-native'
import { of, Observable } from 'rxjs'
import { render, waitForElement, cleanup } from 'react-native-testing-library'
import {
  createMessagingProvider,
  useMessaging,
  RequestPermission,
  ObserveTokens,
  ObserveMessages,
} from './messagingContext'
import { AuthorizationStatus, RemoteMessage } from './types'
import { ObservableView } from '../lib/ObservableView'
import { useAuth } from '../auth'
import { saveToken } from './saveToken'

jest.mock('../auth')
jest.mock('./saveToken')

describe('messagingContext', () => {
  let requestPermission: RequestPermission
  const token = 'token'
  let observeTokens: ObserveTokens
  const message = { notification: { body: 'body', title: 'title' } }
  let observeMessages: ObserveMessages
  const user = { id: 'id' }

  beforeEach(() => {
    requestPermission = jest.fn(() =>
      Promise.resolve(AuthorizationStatus.AUTHORIZED),
    )
    observeTokens = jest.fn(() => of(token))
    observeMessages = jest.fn(() => of(message))
    ;(useAuth as jest.Mock).mockImplementation(() => ({ user }))
    ;(saveToken as jest.Mock).mockImplementation(() => Promise.resolve())
  })

  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
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

  // it('tokens can be consumed', async () => {
  //   const MessagingProvider = createMessagingProvider({
  //     requestPermission,
  //     observeTokens,
  //     observeMessages,
  //   })
  //   const Child = () => {
  //     const { token$ } = useMessaging()

  //     return (
  //       <ObservableView
  //         observable={token$}
  //         renderSuccess={(t: string) => <Text>{t}</Text>}
  //       />
  //     )
  //   }
  //   const { getByText } = render(
  //     <MessagingProvider>
  //       <Child />
  //     </MessagingProvider>,
  //   )

  //   await waitForElement(() => getByText(token))
  //   expect(getByText(token)).toBeDefined()
  // })

  // it('messages can be consumed', async () => {
  //   const MessagingProvider = createMessagingProvider({
  //     requestPermission,
  //     observeTokens,
  //     observeMessages,
  //   })
  //   const Child = () => {
  //     const { message$ } = useMessaging()

  //     return (
  //       <ObservableView
  //         observable={message$}
  //         renderSuccess={(m: RemoteMessage) => (
  //           <>
  //             <Text>{m.notification?.title}</Text>
  //             <Text>{m.notification?.body}</Text>
  //           </>
  //         )}
  //       />
  //     )
  //   }
  //   const { getByText } = render(
  //     <MessagingProvider>
  //       <Child />
  //     </MessagingProvider>,
  //   )

  //   await waitForElement(() => getByText(message.notification.title))
  //   expect(getByText(message.notification.title)).toBeDefined()
  //   expect(getByText(message.notification.body)).toBeDefined()
  // })

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
    expect(observeMessages).toHaveBeenCalledTimes(0)
  })

  it('unsubscribes from observeTokens and observeMessages on unmount', async () => {
    const token$Subscription = {
      unsubscribe: jest.fn(),
    }
    const token$ = ({
      subscribe: () => token$Subscription,
    } as unknown) as Observable<string>
    observeTokens = jest.fn(() => token$)

    const message$Subscription = {
      unsubscribe: jest.fn(),
    }
    const message$ = ({
      subscribe: () => message$Subscription,
    } as unknown) as Observable<RemoteMessage>
    observeMessages = jest.fn(() => message$)

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
    cleanup()
    expect(token$Subscription.unsubscribe).toHaveBeenCalledTimes(1)
    expect(message$Subscription.unsubscribe).toHaveBeenCalledTimes(1)
  })

  it('saves token', async () => {
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
    expect(saveToken).toHaveBeenCalledWith(user.id, token)
  })

  it('does not save token if there is no user', async () => {
    ;(useAuth as jest.Mock).mockImplementation(() => ({ user: undefined }))

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
    expect(saveToken).toHaveBeenCalledTimes(0)
  })
})
