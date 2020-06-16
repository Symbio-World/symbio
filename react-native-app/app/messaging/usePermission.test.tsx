import * as React from 'react'
import { Text } from 'react-native'
import { render, waitForElement } from 'react-native-testing-library'
import { usePermission } from './usePermission'
import { RequestPermission } from './messagingContext'
import { AuthorizationStatus } from './types'

describe('usePermission', () => {
  let requestPermission: RequestPermission

  beforeEach(() => {
    requestPermission = jest.fn(() =>
      Promise.resolve(AuthorizationStatus.AUTHORIZED),
    )
  })

  it('returns authorization status', async () => {
    const Component: React.FC<{}> = () => {
      const { authorizationStatus } = usePermission(requestPermission)
      return <Text>{authorizationStatus?.toString()}</Text>
    }
    const { getByText } = render(<Component />)

    const expectedText = AuthorizationStatus.AUTHORIZED.toString()
    await waitForElement(() => getByText(expectedText))
    expect(getByText(expectedText)).toBeDefined()
  })
})
