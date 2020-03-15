import 'react-native'
import React from 'react'
import { Text } from 'react-native'
import { create, act, ReactTestRenderer } from 'react-test-renderer'

import { createAuthProvider, useAuth } from './auth-context'

describe('AuthContext', () => {
  it('renders correctly', () => {
    const signInAnonymously = jest.fn()
    const AuthProvider = createAuthProvider({ signInAnonymously })
    const tree = create(<AuthProvider>Test</AuthProvider>)
    expect(signInAnonymously).toHaveBeenCalled
    expect(tree).toMatchSnapshot()
  })

  it('can be consumed', async () => {
    const promise = Promise.resolve({ user: { uid: 'uid' } })
    const signInAnonymously = jest.fn<any, any>(() => promise)
    const AuthProvider = createAuthProvider({ signInAnonymously })
    const Child = () => {
      const { user } = useAuth()

      return <Text>{user?.uid}</Text>
    }
    let tree: ReactTestRenderer
    act(() => {
      tree = create(<AuthProvider><Child /></AuthProvider>)
    })

    expect(tree!.toJSON()).toMatchSnapshot();

    await act(async () => {
      await promise
    })

    expect(tree!.toJSON()).toMatchSnapshot();
  })
})
