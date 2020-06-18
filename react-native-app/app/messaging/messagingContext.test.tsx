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
import { AuthorizationStatus, Action } from './types'
import { useAuth } from '../auth'
import { saveToken } from './saveToken'
import { navigate } from '../navigation'

jest.mock('../auth')
jest.mock('./saveToken')
jest.mock('../navigation')

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
    ;(navigate as jest.Mock).mockImplementation(jest.fn)
  })

  afterEach(() => {
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

  it('token can be consumed', async () => {
    const MessagingProvider = createMessagingProvider({
      requestPermission,
      observeTokens,
      observeMessages,
    })
    const Child = () => {
      const { token: t } = useMessaging()
      return <Text>{t}</Text>
    }
    const { getByText } = render(
      <MessagingProvider>
        <Child />
      </MessagingProvider>,
    )

    await waitForElement(() => getByText(token))
    expect(getByText(token)).toBeDefined()
  })

  it('message can be consumed', async () => {
    const MessagingProvider = createMessagingProvider({
      requestPermission,
      observeTokens,
      observeMessages,
    })
    const Child = () => {
      const { message: m } = useMessaging()

      return (
        <>
          <Text>{m?.notification?.title}</Text>
          <Text>{m?.notification?.body}</Text>
        </>
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

  it('navigates to GetUserEmailScreen on message with correct action', async () => {
    observeMessages = jest.fn(() =>
      of({
        ...message,
        data: { action: Action.TRIGGER_GET_USER_EMAIL_SCREEN },
      }),
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
    expect(navigate).toHaveBeenCalledWith('Modals', {
      screen: 'GetUserEmailScreen',
    })
  })

  it('does not navigate to GetUserEmailScreen if email already known', async () => {
    ;(useAuth as jest.Mock).mockImplementation(() => ({
      user: { ...user, email: 'test@example.com' },
    }))
    observeMessages = jest.fn(() =>
      of({
        ...message,
        data: { action: Action.TRIGGER_GET_USER_EMAIL_SCREEN },
      }),
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
    expect(navigate).toHaveBeenCalledTimes(0)
  })
})
