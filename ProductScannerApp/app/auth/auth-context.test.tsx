import 'react-native'
import React from 'react'
import { Text } from 'react-native'
import { create, act, ReactTestRenderer } from 'react-test-renderer'

import { createAuthProvider, useAuth } from './auth-context'

describe('AuthContext', () => {
  it('renders correctly', () => {
    const signInAnonymously = jest.fn()
    const AuthProvider = createAuthProvider({ signInAnonymously })
    create(<AuthProvider>Test</AuthProvider>)
    expect(signInAnonymously).toHaveBeenCalled
  })

  it('can be consumed', async () => {
    const promise = Promise.resolve({ user: { uid: 'uid' } })
    const signInAnonymously = jest.fn<any, any>(() => promise)
    const AuthProvider = createAuthProvider({ signInAnonymously })
    const Child = () => {
      const { user } = useAuth()

      return <Text>{user?.uid}</Text>
    }
    let root: ReactTestRenderer
    act(() => {
      root = create(<AuthProvider><Child /></AuthProvider>)
    })

    expect(root!.toJSON()).toMatchSnapshot();

    await act(async () => {
      await promise
    })

    expect(root!.toJSON()).toMatchSnapshot();
  })
})
