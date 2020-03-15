import 'react-native'
import React from 'react'
import { Text } from 'react-native'
import { render, fireEvent } from 'react-native-testing-library'
import { createAuthProvider, useAuth } from './auth-context'

describe('AuthContext', () => {
  it('renders correctly', () => {
    const AuthProvider = createAuthProvider({ signInAnonymously: jest.fn() })
    const { toJSON } = render(
      <AuthProvider>
        <Text>Test</Text>
      </AuthProvider>,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('signs in', () => {
    const signInAnonymously = jest.fn()
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
    const signInAnonymously = jest.fn<any, any>(() => promise)
    const AuthProvider = createAuthProvider({ signInAnonymously })
    const Child = () => {
      const { user } = useAuth()

      return <Text>{user?.id}</Text>
    }
    const { getByText } = render(
      <AuthProvider>
        <Child />
      </AuthProvider>,
    )

    await promise
    expect(getByText(user.id))
  })
})
