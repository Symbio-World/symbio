import * as React from 'react'
import { Text } from 'react-native'
import { of, Observable } from 'rxjs'
import { render, waitForElement } from 'react-native-testing-library'
import { useToken } from './useToken'
import { ObserveTokens } from './messagingContext'
import { AuthorizationStatus } from './types'

describe('useToken', () => {
  const token = 'token'
  let authorizationStatus: AuthorizationStatus
  let observeTokens: ObserveTokens

  beforeEach(() => {
    authorizationStatus = AuthorizationStatus.AUTHORIZED
    observeTokens = jest.fn(() => of('token'))
  })

  it('returns token', async () => {
    const Component: React.FC<{}> = () => {
      const { token: t } = useToken(authorizationStatus, observeTokens)
      return <Text>{t}</Text>
    }
    const { getByText } = render(<Component />)

    await waitForElement(() => getByText(token))
    expect(getByText(token)).toBeDefined()
  })

  it('returns undefined if authorization status is denied', async () => {
    authorizationStatus = AuthorizationStatus.DENIED
    const defaultText = 'defaultText'
    const Component: React.FC<{}> = () => {
      const { token: t } = useToken(authorizationStatus, observeTokens)
      return <Text>{t || defaultText}</Text>
    }
    const { getByText } = render(<Component />)

    await waitForElement(() => getByText(defaultText))
    expect(getByText(defaultText)).toBeDefined()
  })

  it('does not call observeTokens if authorization status is denied', async () => {
    authorizationStatus = AuthorizationStatus.DENIED
    const defaultText = 'defaultText'
    const Component: React.FC<{}> = () => {
      const { token: t } = useToken(authorizationStatus, observeTokens)
      return <Text>{t || defaultText}</Text>
    }
    const { getByText } = render(<Component />)

    await waitForElement(() => getByText(defaultText))
    expect(observeTokens).toHaveBeenCalledTimes(0)
  })

  it('unsubscribes from observeTokens on unmount', async () => {
    const token$Subscription = {
      unsubscribe: jest.fn(),
    }
    const token$ = ({
      subscribe: () => token$Subscription,
    } as unknown) as Observable<string>
    observeTokens = jest.fn(() => token$)

    const defaultText = 'defaultText'
    const Component: React.FC<{}> = () => {
      const { token: t } = useToken(authorizationStatus, observeTokens)
      return <Text>{t || defaultText}</Text>
    }
    const { getByText, unmount } = render(<Component />)

    await waitForElement(() => getByText(defaultText))
    unmount()
    expect(token$Subscription.unsubscribe).toHaveBeenCalledTimes(1)
  })
})
