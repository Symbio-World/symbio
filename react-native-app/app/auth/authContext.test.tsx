import * as React from 'react'
import { Text } from 'react-native'
import { render } from 'react-native-testing-library'
import { createAuthProvider, useAuth, SignInAnonymously } from './authContext'

describe('authContext', () => {
  let signInAnonymously: SignInAnonymously

  beforeEach(() => {
    signInAnonymously = jest.fn()
  })

  it('renders correctly', () => {
    const AuthProvider = createAuthProvider({ signInAnonymously })
    const { toJSON } = render(
      <AuthProvider>
        <Text>Test</Text>
      </AuthProvider>,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('signs in', () => {
    const AuthProvider = createAuthProvider({ signInAnonymously })
    render(
      <AuthProvider>
        <Text>Test</Text>
      </AuthProvider>,
    )
    expect(signInAnonymously).toHaveBeenCalled()
  })

  it('can be consumed', async () => {
    const user = { id: 'id' }
    const promise = Promise.resolve(user)
    signInAnonymously = jest.fn(() => promise)
    const AuthProvider = createAuthProvider({ signInAnonymously })
    const Child = () => {
      const { user: u } = useAuth()

      return <Text>{u?.id}</Text>
    }
    const { getByText } = render(
      <AuthProvider>
        <Child />
      </AuthProvider>,
    )

    await promise
    expect(getByText(user.id)).toBeDefined()
  })
})
