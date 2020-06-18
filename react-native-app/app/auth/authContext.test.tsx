import * as React from 'react'
import { Text, Button } from 'react-native'
import { render, fireEvent, waitForElement } from 'react-native-testing-library'
import { createAuthProvider, useAuth, SignInAnonymously } from './authContext'
import { FetchEmail } from './fetchEmail'

describe('authContext', () => {
  const user = { id: 'id' }
  let signInAnonymously: SignInAnonymously
  let fetchEmail: FetchEmail

  beforeEach(() => {
    signInAnonymously = jest.fn(() => Promise.resolve(user))
    fetchEmail = jest.fn(() => Promise.resolve(undefined))
  })

  it('renders correctly', () => {
    const AuthProvider = createAuthProvider({ signInAnonymously, fetchEmail })
    const { toJSON } = render(
      <AuthProvider>
        <Text>Test</Text>
      </AuthProvider>,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('signs in', () => {
    const AuthProvider = createAuthProvider({ signInAnonymously, fetchEmail })
    render(
      <AuthProvider>
        <Text>Test</Text>
      </AuthProvider>,
    )
    expect(signInAnonymously).toHaveBeenCalled()
  })

  it('can be consumed', async () => {
    const AuthProvider = createAuthProvider({ signInAnonymously, fetchEmail })
    const Child = () => {
      const { user: u } = useAuth()

      return <Text>{u?.id}</Text>
    }
    const { getByText } = render(
      <AuthProvider>
        <Child />
      </AuthProvider>,
    )

    await waitForElement(() => getByText(user.id))
    expect(getByText(user.id)).toBeDefined()
  })

  it('can set email', async () => {
    const email = 'test@example.com'
    const AuthProvider = createAuthProvider({ signInAnonymously, fetchEmail })
    const Child = () => {
      const { user: u, setEmail } = useAuth()
      return (
        <>
          <Text>{u?.id}</Text>
          <Text>{u?.email}</Text>
          <Button title="Button" onPress={() => setEmail(email)} />
        </>
      )
    }
    const { getByText, getByType } = render(
      <AuthProvider>
        <Child />
      </AuthProvider>,
    )

    await waitForElement(() => getByText(user.id))
    fireEvent.press(getByType(Button))
    expect(getByText(email)).toBeDefined()
  })

  it('fetches email', async () => {
    const email = 'test@example.com'
    fetchEmail = jest.fn(() => Promise.resolve(email))
    const AuthProvider = createAuthProvider({ signInAnonymously, fetchEmail })
    const Child = () => {
      const { user: u } = useAuth()
      return (
        <>
          <Text>{u?.id}</Text>
          <Text>{u?.email}</Text>
        </>
      )
    }
    const { getByText } = render(
      <AuthProvider>
        <Child />
      </AuthProvider>,
    )

    await waitForElement(() => getByText(user.id))
    expect(fetchEmail).toHaveBeenCalled()
    expect(getByText(email)).toBeDefined()
  })
})
